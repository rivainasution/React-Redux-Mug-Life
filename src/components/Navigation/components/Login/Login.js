import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <div className="f-button d-flex justify-content-between">
            <Link to='/' className="f-shopping-cart p-2">
                <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to='/' className="mx-2 f-button f-button-register p-2">Register</Link>
            <Link to='/' className="f-button f-button-login p-2">Login</Link>
        </div>
    );
}