export type StyleProps = {
    readonly [key: string]: string;
}

export type LinkItem = {
    text: string;
    link: string;
}

export enum StyleType {
    Primary,
    Secondary,
    Success,
    Error,
}