import { StyleProps, StyleType } from "../components/consts";

export const getStyleTypeStyle = (Styles: StyleProps, type = StyleType.Primary): string => {
    switch (type) {
        default:
            return Styles.primary;
        case StyleType.Secondary:
            return Styles.secondary;
        case StyleType.Success:
            return Styles.success;
        case StyleType.Error:
            return Styles.error;
    }
};