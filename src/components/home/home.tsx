/* eslint-disable @typescript-eslint/no-explicit-any */
import Styles from "./home.module.css";
import firebaseApp from "../../config";
import "firebase/compat/database";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { StyleType } from "../consts";

const Home = (): JSX.Element => {
	const [data, setData] = useState<any>();
	const [previousOxygens, setPreviousOxygens] = useState<string[]>();
	const [previousDates, setPreviousDates] = useState<Date[]>();
	const [previousIds, setPreviousIds] = useState<string[]>();
	const [ref, setRef] = useState<any>();

	const decode = (id: string) => {
		const PUSH_CHARS =
			"-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
		id = id.substring(0, 8);
		let timestamp = 0;
		for (let i = 0; i < id.length; i++) {
			timestamp = timestamp * 64 + PUSH_CHARS.indexOf(id.charAt(i));
		}
		return timestamp;
	};

	const handleClickDelete = (id: number, date?: string) => {
		if (confirm(`Do you really want to delete this item at ${date}`)) {
			return ref
				?.child("previous_oxygen")
				.child(previousIds?.at(id))
				.remove();
		}
	};

	useEffect(() => {
		const res = firebaseApp
			.database(
				"https://cosc2500-oximeter-default-rtdb.asia-southeast1.firebasedatabase.app"
			)
			.ref("/");
		setRef(res);
		res.on("value", (snapshot) => {
			const previousData = snapshot.val()?.previous_oxygen;
			if (!previousData) {
				return;
			}
			setPreviousOxygens(
				Object.values(previousData).reverse() as string[]
			);
			setPreviousIds(Object.keys(previousData).reverse());
			setPreviousDates(
				Object.keys(previousData)
					.map((value) => new Date(decode(value)))
					.reverse()
			);
			setData(snapshot.val());
		});
	}, []);

	return (
		<div className={Styles.homeWrapper}>
			{data && (
				<>
					<div className="d-flex flex-column align-items-center my-5">
						<h1 className={`mx-4 display-1 ${Styles.current}`}>
							Oxygen:{" "}
							<strong>
								<em>{data.oxygen}%</em>
							</strong>
						</h1>
					</div>
					<div className={`mt-3 ${Styles.listWrapper}`}>
						<ul>
							{previousOxygens?.map(
								(value: string, key: number) => {
									return (
										<li
											className={`p-4 my-3 d-flex flex-row align-items-center ${Styles.listItem}`}
											key={previousIds?.at(key)}
										>
											<h4 className={`mx-2`}>
												Oxygen: {value}%
											</h4>
											<h4 className={`mx-2`}>
												Date:{" "}
												{previousDates
													?.at(key)
													?.toString()}
											</h4>
											<Button
												text="Delete"
												type={StyleType.Error}
												onClick={() =>
													handleClickDelete(
														key,
														previousDates
															?.at(key)
															?.toString()
													)
												}
											/>
										</li>
									);
								}
							)}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
