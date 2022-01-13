import { FC } from "react";
import ButtonProps from "./dto";
import Styles from "./button.module.css";
import { getStyleTypeStyle } from "../../utils/utils";

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
	return (
		<>
			<button
				className={`${Styles.button} ${getStyleTypeStyle(Styles, props.type)}`}
				onClick={props.onClick}
			>
				{props.text}
			</button>
		</>
	);
};

export default Button;
