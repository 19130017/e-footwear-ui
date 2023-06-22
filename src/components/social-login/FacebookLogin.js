import { useEffect, useState } from "react";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

import { useDispatch } from "react-redux";
import { fetchLoginFB } from "~/redux/auth/authSlice";

function FacebookLogin() {
    const [profile, setProfile] = useState();
    const dispatch = useDispatch();

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
                },
            };
            dispatch(fetchLoginFB(data));
            // window.location.href = "/";
        }
    }, [profile, dispatch]);

    return (
        <LoginSocialFacebook
            appId={"640001684852756"}
            version="v17.0"
            onResolve={onResolve}
            onReject={onReject}
        >
            <FacebookLoginButton
                className="rounded-2xl flex justify-center items-center text-2xl "
                activeStyle={false}
            >
                <span>Đăng nhập với Facebook</span>
            </FacebookLoginButton>
        </LoginSocialFacebook>
    );
}

export default FacebookLogin;
