import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// layouts
import { MainLayout, FullWidthLayout } from "./layouts";
// pages
import { SignIn, SignUp, Forgot } from "./pages/auth";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Account from "./pages/account";
import Profile from "./pages/profile";
import ChangePassword from "./pages/change-password";

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
                </Route>
            </Routes>
        </div>
    );
}

export default App;
