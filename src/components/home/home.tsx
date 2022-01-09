import { Button } from "../button";
import { StyleType } from "../consts";
import { Input } from "../input";
import Styles from "./home.module.css";

const Home = (): JSX.Element => {
	const onChangeUserName = (): void => {
		console.log("hhh");
	};

	const clickLogin = (): void => {
		console.log("hhh");
	};

	return (
		<div className={Styles.homeWrapper}>
			<div className={`p-5 ${Styles.loginModal}`}>
				<h4 className="mb-5">Login to your account</h4>
				<Input
					onChange={onChangeUserName}
					placeHolder={`johndoe@gmail.com`}
				/>
				<Input onChange={onChangeUserName} placeHolder={`123456789`} />
				<Button
					text="Login"
					onClick={clickLogin}
					type={StyleType.Primary}
				/>
			</div>
		</div>
	);
};

export default Home;
