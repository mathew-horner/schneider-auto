import type { FC, PropsWithChildren, ReactNode } from "react";
import Navbar from "./Navbar";
import Overlay from "./Overlay";
import Button from "./Button";

interface Props {
    backgroundImage: string;
    header: string;
    paragraph: string;
}

const Hero: FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
    const header = props.header.toUpperCase();
    return (
        <section
            className="flex flex-col items-center p-8 pb-32 gap-8 text-white bg-cover relative"
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
            <Navbar />
            <div
                className="flex flex-col max-w-3xl gap-8 items-center text-center z-10 relative"
            >
                <h1 className="font-bold text-6xl max-w-2xl">
                    {header}
                </h1>
                <p className="mb-8">
                    {props.paragraph}
                </p>
                <Button url="/contact" text="Contact Us" />
            </div>
            <Overlay />
        </section>
    );
};

export default Hero;