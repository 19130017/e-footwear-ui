import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import useSpeechToText from 'react-hook-speech-to-text';
import style from "./Search.module.scss";
import classnames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classnames.bind(style);
const Search = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    var timer;
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        speechRecognitionProperties: {
            lang: 'vi-VN',
            interimResults: true // Allows for displaying real-time speech results
        },
        continuous: true,
        googleApiKey: 'AIzaSyB0Gsdi8t8o0ljBfBKAIGTqClcnfLyj3Dk',
        useLegacyResults: false,
        crossBrowser: true,
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate({ pathname: "/search", search: `?query=${query}` });
        setQuery("");
    };

    const handleRequestSearchByVoice = async () => {
        navigate({ pathname: "/search", search: `?query=${query}` });
        setQuery("");
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    useEffect(() => {
        if (interimResult && isRecording) {
            setQuery(interimResult);
        }
        if (typeof timer !== "undefined") {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            if (interimResult) {
                stopSpeechToText();
                // resetTranscript();
                handleRequestSearchByVoice();
            }

        }, 2000);


        return () => clearTimeout(timer);

    }, [query, interimResult, isRecording]);

    return (
        <Box
            component={"form"}
            sx={{
                display: "flex",
                backgroundColor: "#efefef",
                borderRadius: "5px",
                width: "50%",
            }}
            className={cx("icon-wrapper")}
            onSubmit={(e) => handleSubmit(e)}
        >
            {
                <IconButton
                    aria-label="search"
                    className={cx("icon-btn")}
                    sx={{ width: "20%", padding: "0 10px" }}
                    onClick={!isRecording ? startSpeechToText : stopSpeechToText}
                >
                    {!isRecording ? <KeyboardVoiceIcon
                        color="error"
                        sx={{ padding: "0 2px" }}
                        className={cx("icon")} />
                        : <SettingsVoiceIcon
                            color="error"
                            sx={{ padding: "0 2px" }}
                            className={cx("icon")} />
                    }

                </IconButton>
            }
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    fontSize: "16px",
                    padding: "5px 0 5px 8px",
                }}
                value={query}
                placeholder="Bạn đang tìm gì ?"
                type="text"
                name="query"
                onChange={(e) => handleChange(e)}
            />
            <IconButton
                aria-label="search"
                className={cx("icon-btn")}
                sx={{ width: "20%" }}
                type="submit"
            >
                <SearchIcon className={cx("icon")} />
            </IconButton>
        </Box>
    );
}

export default Search;
