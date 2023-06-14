import { useCallback, useEffect, useState } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";

import classNames from "classnames/bind";
import style from "./SocialLogin.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLoginGG } from "~/redux/auth/authSlice";
const cx = classNames.bind(style);

function GoogleLogin() {
    const [provider, setProvider] = useState("");
    const [profile, setProfile] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLoginStart = useCallback(() => {
        // alert("login start");
    }, []);

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider("");
        alert("logout success");
    }, []);
    const onLogout = useCallback(() => { }, []);

    const onResolve = ({ provider, data }) => {
        setProvider(provider);
        setProfile(data);
        // navigate("/");
    };
    const onReject = (err) => {
        console.log(err);
    };

    useEffect(() => {
        if (profile) {
            const data = {
                gid: profile.sub,
                email: profile.email,
                customer: {
                    avatar: profile.picture,
                    firstName: profile.given_name,
                    lastName: profile?.family_name ? profile.family_name : null,
                },
            };
            dispatch(fetchLoginGG(data));
        }
    }, [profile, dispatch]);
    return (
        <LoginSocialGoogle
            client_id={"882148200553-rro95qim4oaucfj4nvmb66lkhpe1pmma.apps.googleusercontent.com"}
            onLoginStart={onLoginStart}
            redirect_uri={"footwear-haba.vercel.app/"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={onResolve}
            onReject={onReject}
        >
            <GoogleLoginButton className={cx("google-btn")} activeStyle={false}>
                <span>Đăng nhập với Google</span>
            </GoogleLoginButton>
        </LoginSocialGoogle>
    );
}

export default GoogleLogin;
