import { NavLink } from "react-router";
import S from "./navigation.module.scss";

const NavigationComponent = () => {
    return (
        <ul className={S.container}>
            <li>
                <NavLink
                    className={({ isActive }: { isActive: boolean }) => (isActive ? S.active : "")}
                    to="/"
                >
                    Forside
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }: { isActive: boolean }) => (isActive ? S.active : "")}
                    to="/matador">Matador</NavLink>
            </li>
        </ul>
    );
};

export default NavigationComponent;
