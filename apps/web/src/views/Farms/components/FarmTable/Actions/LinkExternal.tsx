import { Link, LinkProps } from "@pancakeswap/uikit";
import React from "react";
// import Link from "./Link";
// import { LinkProps } from "./types";
// import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<React.PropsWithChildren<LinkProps>> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}     
    </Link>
  );
};

export default LinkExternal;
