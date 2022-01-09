import { StyleType } from "../consts";

type ButtonProps = {
    onClick: () => void;
    text: string;
    type?: StyleType;
};

export default ButtonProps;