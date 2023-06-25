import { Link } from "react-router-dom";
import style from "./Banner.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(style)

function Banner(props) {
    return (
        <Link to={props.url} className={cx("banner-wrapper", "relative overflow-hidden rounded-[5px] block")}>
            <img src={props.image} alt={props.title} className={"w-full hover:scale-105 transition-all duration-300 ease-in-out"} />
        </Link>
    );
}

export default Banner;
