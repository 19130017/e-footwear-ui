import { useCallback, useEffect, useState } from "react";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

import classNames from "classnames/bind";
import style from "./SocialLogin.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLoginFB } from "~/redux/auth/authSlice";
const cx = classNames.bind(style);

function FacebookLogin() {
    const [profile, setProfile] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLoginStart = useCallback(() => {
    }, []);
    const onResolve = ({ provider, data }) => {
        setProfile(data);
    };
    const onReject = (err) => {
        console.log(err);
    };
    useEffect(() => {
        if (profile) {
            const data = {
                fid: profile?.userID,
                email: profile?.email,
                customer: {
                    avatar: profile?.picture?.data?.url,
                    firstName: profile?.first_name,
                    lastName: profile?.last_name,
                }
            };
            dispatch(fetchLoginFB(data));
        }
    }, [profile, dispatch]);

    return (
        <LoginSocialFacebook
            appId={"640001684852756"}
            onLoginStart={onLoginStart}
            onResolve={onResolve}
            onReject={onReject}
        >
            <FacebookLoginButton className={cx("facebook-btn")} activeStyle={false}>
                <span>Đăng nhập với Facebook</span>
            </FacebookLoginButton>
        </LoginSocialFacebook>
    );
}

export default FacebookLogin;
