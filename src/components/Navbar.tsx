import type { FC } from "react";
import Button from "./Button";
import Logo from "./Logo";

interface Props {
    foreground?: "light" | "dark";
}

const Navbar: FC<Props> = (props: Props) => {
    const foreground = props.foreground || "light";
    return (
        <div className={`w-full flex justify-between pr-8 ${foreground}-foreground z-10 relative`}>
            <a href="/"><Logo /></a>
            <nav className="flex items-center gap-8">
                <Button url="/tires" text="Tires" variant="bare" />
                <Button url="/about" text="About Us" variant="bare" />
                <Button url="/contact" text="Contact Us" />
            </nav>
        </div>
    );
};

export default Navbar;