import { useCallback, useState } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

import classNames from "classnames/bind";
import style from "./SocialLogin.module.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);

function FacebookLogin() {
    const [provider, setProvider] = useState("");
    const [profile, setProfile] = useState();
    const onLoginStart = useCallback(() => {
        alert("login start");
    }, []);

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider("");
        alert("logout success");
    }, []);

    return (
        <LoginSocialGoogle
            client_id="882148200553-rro95qim4oaucfj4nvmb66lkhpe1pmma.apps.googleusercontent.com"
            // onLoginStart={onLoginStart}
            redirect_uri={"http://localhost:3000"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            onResolve={({ provider, data }) => {
                setProvider(provider);
                setProfile(data);
            }}
            onReject={(err) => {
                console.log(err);
            }}
        >
            <FacebookLoginButton className={cx("facebook-btn")} activeStyle={false}>
                <span>Đăng nhập với Facebook</span>
            </FacebookLoginButton>
        </LoginSocialGoogle>
    );
}

export default FacebookLogin;
