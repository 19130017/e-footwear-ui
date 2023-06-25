import "./Category.scss";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
function CategorySub(props) {
    return (
        <>
            {props?.item.length !== 0 && <ArrowRightIcon className="h-9 w-9 text-[#252a2b]" />}
            <ul className="submenu-level">
                {props.item.map((item, index) => (
                    <li key={index} className="submenu-item">
                        <Link className="no-underline text-black" to={`/collections/${item.slug}`}>
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
