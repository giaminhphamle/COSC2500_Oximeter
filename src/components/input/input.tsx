import { FC } from "react";
import { getStyleTypeStyle } from "../../utils/utils";
import InputProps from "./dto";
import Styles from "./input.module.css";

const Input: FC<InputProps> = (props: InputProps): JSX.Element => {
	return (
		<>
			<input
                {...props}
				className={`my-2 py-2 px-3 ${Styles.input} ${getStyleTypeStyle(Styles, props.styleType)}`}
				type={props.type ?? "text"}
			/>
		</>
	);
};

export default Input;
