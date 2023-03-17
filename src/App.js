import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// layouts
import { MainLayout, FullWidthLayout } from "~/layouts";
// pages
import { SignIn, SignUp, Forgot, VerifyForgot, VerifyAccount, ResetPassword } from "~/pages/auth";
import Home from "~/pages/home";
import Contact from "~/pages/contact";
import About from "~/pages/about";
import Account from "~/pages/account";
import Purchase from "~/components/purchase";
import Profile from "~/components/profile";
import OrderDetail from "~/components/order-detail";
import ChangePassword from "~/components/change-password";
import Product from "./pages/product";
import ProductDetail from "./pages/product-detail";

function App() {
    const isLogin = true;
    return (
        <div className="App">
            <Routes>
                <Route
                    element={
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    }
                >
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />

                    <Route
                        path="/account"
                        element={isLogin ? <Account /> : <Navigate to="/auth/sign-in" />}
                    >
                        <Route path="profile" element={<Profile />} />
                        <Route path="change-password" element={<ChangePassword />} />
                        <Route path="purchase" element={<Purchase />} />
                        <Route path="purchase/order/:id" element={<OrderDetail />} />
                    </Route>
                </Route>
                <Route
                    element={
                        <MainLayout>
                            <Outlet />
                        </MainLayout>
                    }
                >
                    <Route path="/product" element={<Product />} />
                    <Route path="/detail/:slug" element={<ProductDetail />} />
                </Route>

                <Route
                    element={
                        <FullWidthLayout>
                            <Outlet />
                        </FullWidthLayout>
                    }
                >
                    <Route path="/auth/sign-in" element={<SignIn />} />
                    <Route path="/auth/sign-up" element={<SignUp />} />
                    <Route path="/auth/forgot" element={<Forgot />} />
                    <Route path="/auth/verify-forgot/:token" element={<VerifyForgot />} />
                    <Route path="/auth/verify-account/:token" element={<VerifyAccount />} />
                </Route>
                <Route
                    element={
                        <FullWidthLayout>
                            <Outlet />
                        </FullWidthLayout>
                    }
                ></Route>

                <Route path="/auth/reset-password" element={<ResetPassword />} />
            </Routes>
        </div>
    );
}

export default App;
