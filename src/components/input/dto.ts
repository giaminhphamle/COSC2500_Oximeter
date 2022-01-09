import { StyleType } from "../consts";
import { Maybe } from "../maybe";

type InputProps = {
    onChange: () => void;
    placeHolder?: Maybe<string>;
    type?: Maybe<string>;
    styleType?: StyleType;
};

export default InputProps;