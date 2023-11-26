import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { lektechHome, logo, yariga, logo1 } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo1} alt="Yariga" width="50px" />
                ) : (
                    <img src={lektechHome} alt="Refine" width="55px" />
                )}
            </Link>
        </Button>
    );
};