import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetParentCategory } from "~/redux/category/categorySlice";
import "./Category.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CategorySub from "./CategorySub";
import { Grid } from "@mui/material";

function Category() {
    const categories = useSelector((state) => state.categoryReducer.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetParentCategory());
    }, []);

    return (
        <Grid container className="category justify-center items-center">
            {categories &&
                categories.map((item, index) => (
                    <Grid item key={index} className="link relative p-4">
                        <Link
                            to={`collections/${item.slug}`}
                            className="font-medium no-underline block uppercase text-black  text-center sm:text-lg md:text-3xl lg:text-[20px] lg:mr-4"
                        >
                            {item.name}
                            {item?.children.length !== 0 && (
                                <ArrowDropDownIcon className="h-6 w-6 text-[#252a2b]" />
                            )}
                        </Link>
                        {item?.children.length !== 0 && (
                            <ul className="submenu">
                                {item?.children.map((item, index) => (
                                    <li key={index} className="submenu-item">
                                        <Link
                                            className="no-underline text-black"
                                            to={`/collections/${item.slug}`}
                                        >
                                            {item.name}
                                        </Link>
                                        {item?.children.length !== 0 && (
                                            <CategorySub item={item.children} />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Grid>
                ))}
        </Grid>
    );
}

export default Category;
