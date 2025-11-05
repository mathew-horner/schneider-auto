import type { FC } from "react";
import logo from "~/assets/logo.png";

interface Props {
}

const Logo: FC<Props> = (props: Props) => {
    return <img src={logo.src} height={150} width={150} />;
}

export default Logo;