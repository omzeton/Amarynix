import React from "react";

import { GitIcon } from "./GitIcon";
import { FooterLink } from "./FooterLink";

export const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <GitIcon />
            <FooterLink />
        </footer>
    );
};
