import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./Search.module.scss";
import classnames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const cx = classnames.bind(style);
function Search() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate({ pathname: "/search", search: `?query=${query}` });
        setQuery("");
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };
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
