import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

function ChatBot() {
    const MessengerRef = useRef();
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: "v17.0",
            });
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");

        MessengerRef.current.setAttribute("page_id", "103824452759818");
        MessengerRef.current.setAttribute("attribution", "biz_inbox");
    }, []);
    return (
        <Box>
            <div id="fb-root"></div>
            <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div>
        </Box>
    );
}

export default ChatBot;
