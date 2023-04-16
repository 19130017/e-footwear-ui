import classnames from "classnames/bind";
import style from "./Category.module.scss";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const cx = classnames.bind(style);
function CategorySub(props) {
    return (
        <>
            {props?.item.length !== 0 && <ArrowRightIcon className={cx("icon-sub")} />}
            <ul className={cx("submenu-level")}>
                {props.item.map((item, index) => (
                    <li key={index} className={cx("submenu-item")}>
                        <Link className={cx("direct")} to={`/collections/${item.slug}`}>
                            {item.name}
                        </Link>
                        {item?.children && <CategorySub item={item.children} />}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CategorySub;
