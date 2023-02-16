// layout
import { FullWidthLayout } from "~/layouts";

// page
import SignIn from "~/pages/signin/SignIn";

export const publicRoutes = [
    {
        path: "/auth/signin",
        component: SignIn,
        exact: true,
        layout: FullWidthLayout,
    },
];
