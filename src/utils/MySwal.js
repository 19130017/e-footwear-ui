import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const PopUpSuccess = Swal.mixin({
    customClass: {
        confirmButton: "popup-btn--confirm",
        popup: "rounded-3 popup-shadow",
        title: "popup-title--success",
        text: "popup-text--success",
    },
    buttonsStyling: false,
});

export default MySwal;

export { PopUpSuccess };
