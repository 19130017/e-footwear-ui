import { Link } from "react-router-dom";
import style from "./Banner.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(style)

function Banner(props) {
    return (
        <Link to={props.url} className={cx("banner-wrapper")}>
            <img src={props.image} alt={props.title} />
        </Link>
    );
}

export default Banner;
