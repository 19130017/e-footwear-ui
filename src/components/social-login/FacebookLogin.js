import { useCallback, useState } from "react";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

import classNames from "classnames/bind";
import style from "./SocialLogin.module.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);

function FacebookLogin() {
    const onLoginStart = useCallback(() => {
    }, []);
    return (
        <LoginSocialFacebook
            appId={"640001684852756"}
            onLoginStart={onLoginStart}
            onResolve={(response) => {
                console.log(response);
            }}
            onReject={(error) => {
                console.log(error);
            }}
        >
            <FacebookLoginButton className={cx("facebook-btn")} activeStyle={false}>
                <span>Đăng nhập với Facebook</span>
            </FacebookLoginButton>
        </LoginSocialFacebook>
    );
}

export default FacebookLogin;
