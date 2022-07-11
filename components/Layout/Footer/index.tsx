import React, { HTMLAttributes } from "react";
import { Player } from "../../";

interface IFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const Footer = (props: IFooterProps) => {
  return (
    <div {...props}>
      <Player />
    </div>
  );
};
