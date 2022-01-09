import { Header } from "../header";

const Info = (): JSX.Element => {
	const headerItems = [
		{ text: "test1", link: "/" },
		{ text: "test2", link: "/" },
	];

	return (
		<div>
			<Header items={headerItems} />
		</div>
	);
};

export default Info;
