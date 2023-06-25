import SearchIcon from "@mui/icons-material/Search";

import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import useSpeechToText from "react-hook-speech-to-text";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, IconButton, InputBase } from "@mui/material";

function Search({ parentCallback }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const { error, interimResult, isRecording, results, startSpeechToText, stopSpeechToText } =
        useSpeechToText({
            speechRecognitionProperties: {
                lang: "vi-VN",
                interimResults: true, // Allows for displaying real-time speech results
            },
            continuous: true,
            googleApiKey: "AIzaSyB0Gsdi8t8o0ljBfBKAIGTqClcnfLyj3Dk",
            useLegacyResults: false,
            crossBrowser: true,
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate({ pathname: "/search", search: `?query=${query}` });
        setQuery("");
        parentCallback && parentCallback();
    };

    const handleRequestSearchByVoice = async () => {
        navigate({ pathname: "/search", search: `?query=${query}` });
        setQuery("");
        parentCallback && parentCallback();
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    useEffect(() => {
        var timer;
        if (interimResult && isRecording) {
            setQuery(interimResult);
        }
        if (typeof timer !== "undefined") {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            if (interimResult) {
                stopSpeechToText();
                handleRequestSearchByVoice();
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [query, interimResult, isRecording]);

    return (
        <Box
            component={"form"}
            className={"w-full flex bg-[#efefef] md:rounded-[5px]  md:mx-4"}
            onSubmit={(e) => handleSubmit(e)}
        >
            {
                <IconButton
                    aria-label="search"
                    className="w-[50px] h-[50px] rounded-none"
                    onClick={!isRecording ? startSpeechToText : stopSpeechToText}
                >
                    {!isRecording ? (
                        <KeyboardVoiceIcon
                            // color="error"
                            className="px-1 w-[20px] h-[20px]"
                        />
                    ) : (
                        <SettingsVoiceIcon color="error" className="px-1 w-[20px] h-[20px]" />
                    )}
                </IconButton>
            }
            <InputBase
                value={query}
                placeholder="Bạn đang tìm gì ?"
                type="text"
                classes={{ root: "flex-1 text-xl md:text-[16px] px-4" }}
                name="query"
                onChange={(e) => handleChange(e)}
            />
            <IconButton
                aria-label="search"
                className={"flex-none right-0 px-4 rounded-none focus:rounded-none"}
                type="submit"
            >
                <SearchIcon className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-[#252a2b]" />
            </IconButton>
        </Box>
    );
}

export default Search;
