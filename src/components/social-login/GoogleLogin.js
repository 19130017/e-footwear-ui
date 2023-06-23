import { useEffect, useState } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchLoginGG } from "~/redux/auth/authSlice";

function GoogleLogin() {
    const [provider, setProvider] = useState("");
    const [profile, setProfile] = useState();
    const dispatch = useDispatch();
    
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
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={onResolve}
            onReject={onReject}
        >
            <GoogleLoginButton
                className="text-black rounded-2xl flex justify-center items-center text-2xl "
                activeStyle={false}
            >
                <span>Đăng nhập với Google</span>
            </GoogleLoginButton>
        </LoginSocialGoogle>
    );
}

export default GoogleLogin;
