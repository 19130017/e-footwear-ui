// layout
import { FullWidthLayout } from "~/layouts";
import { SignIn, SignUp } from "~/pages/auth";
import Forgot from "~/pages/auth/Forgot";
import Home from "~/pages/home/Home";

// page

export const publicRoutes = [
    {
        path: "/auth/sign-in",
        component: SignIn,
        exact: true,
        layout: FullWidthLayout,
    },
    {
        path: "/auth/sign-up",
        component: SignUp,
        exact: true,
        layout: FullWidthLayout,
    },
    {
        path: "/auth/forgot",
        component: Forgot,
        exact: true,
        layout: FullWidthLayout,
    },
    {
        path: "/",
        component: Home,
        exact: true,
    },
];
