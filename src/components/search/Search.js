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
            className={"w-full flex bg-[#efefef] rounded-[5px] mx-4"}
            onSubmit={(e) => handleSubmit(e)}
        >
            <InputBase
                value={query}
                placeholder="Bạn đang tìm gì ?"
                type="text"
                classes={{ root: "flex-1 text-[16px] px-4" }}
                name="query"
                onChange={(e) => handleChange(e)}
            />
            <IconButton
                aria-label="search"
                className={"flex-none right-0 px-4 rounded-none focus:rounded-none"}
                type="submit"
            >
                <SearchIcon className={"w-[30px] h-[30px] text-[#252a2b]"} />
            </IconButton>
        </Box>
    );
}

export default Search;
