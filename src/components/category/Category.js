import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGetParentCategory } from "~/redux/category/categorySlice";
import classnames from "classnames/bind";
import style from "./Category.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CategorySub from "./CategorySub";

const cx = classnames.bind(style);
function Category() {
    const categories = useSelector((state) => state.categoryReducer.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetParentCategory());
    }, []);

    return (
        <ul className={cx("menu")}>
            {categories &&
                categories.map((item, index) => (
                    <li key={index} className={cx("link")}>
                        <Link to={`collections/${item.slug}`} className={cx("menu-item")}>
                            {item.name}
                        </Link>
                        {item?.children.length !== 0 && (
                            <>
                                <ArrowDropDownIcon className={cx("icon")} />
                                <ul className={cx("submenu")}>
                                    {item?.children.map((item, index) => (
                                        <li key={index} className={cx("submenu-item")}>
                                            <Link
                                                className={cx("direct")}
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
                            </>
                        )}
                    </li>
                ))}
        </ul>
    );
}

export default Category;
