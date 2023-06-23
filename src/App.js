import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// layouts
import { MainLayout, FullWidthLayout } from "~/layouts";
// pages
import {
    SignIn,
    SignUp,
    Forgot,
    NotificationItem,
    VerifyAccount,
    ResetPassword,
} from "~/pages/auth";
import Home from "~/pages/home";
import Contact from "~/pages/contact";
import About from "~/pages/about";
import Account from "~/pages/account";
import Cart from "~/pages/cart";
import ProductDetail from "~/pages/product-detail";
import { Checkout, CheckoutResult } from "~/pages/checkout";
//components
import Address from "~/components/address";
import Purchase from "~/components/purchase";
import Profile from "~/components/profile";
import OrderDetail from "~/components/order-detail";
import ChangePassword from "~/components/change-password";
import NotFound from "./pages/not-found";
import ComingSoon from "./pages/coming-soon/ComingSoon";
import Search from "./pages/search/Search";
import Collection from "./pages/collection";
import { useSelector } from "react-redux";
function App() {
    const { isLogin } = useSelector((state) => state.authReducer);   

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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/collections/:slug" element={<Collection />} />
                    <Route path="/detail/:slug/:color_id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/payment/response" element={<CheckoutResult />} />
                    <Route
                        path="/account"
                        element={isLogin ? <Account /> : <Navigate to="/auth/sign-in" />}
                    >
                        <Route path="profile" element={<Profile />} />
                        <Route path="addresses" element={<Address />} />
                        <Route path="change-password" element={<ChangePassword />} />
                        <Route path="purchase" element={<Purchase />} />
                        <Route path="purchase/order/:id" element={<OrderDetail />} />
                    </Route>
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
                    <Route path="/auth/notification" element={<NotificationItem />} />
                    <Route path="/auth/verify-account/:token" element={<VerifyAccount />} />
                    <Route path="/auth/reset-password/:token" element={<ResetPassword />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
