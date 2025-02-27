import { NavLink } from "react-router";
import S from "./navigation.module.scss";

const NavigationComponent = () => {
    return (
        <ul className={S.container}>
            <li>
                <NavLink to="/">Forside</NavLink>
            </li>
            <li>
                <NavLink to="/matador">Matador</NavLink>
            </li>
        </ul>
    );
};

export default NavigationComponent;