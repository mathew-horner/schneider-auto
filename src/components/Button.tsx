import type { FC } from "react";
import "./Button.css";

interface Props {
    url?: string;
    variant?: "primary" | "secondary" | "bare";
    text: string;
}

const Button: FC<Props> = (props: Props) => {
    const text = props.text.toUpperCase();
    const variant = props.variant || "primary";
    const className = `button-${variant}`;
    if (props.url !== undefined) {
        return <a className={className} href={props.url}>{text}</a>;
    } else {
        return <button className={className}>{text}</button>
    }
};

export default Button;