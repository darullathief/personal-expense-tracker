import { useState } from 'react';
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faChartPie,
    faCalendarDays,
    faUser
}
    from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="nav-container">
            <div className="hamburger-menu">
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
            <div className={`nav-link-container ${isOpen ? 'open-nav' : ''}`}>
                <NavLink
                    className={`nav-link ${({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                        }`}
                    to={'/'}>
                    <FontAwesomeIcon icon={faHouse} />
                    <span>Home</span>
                </NavLink>
                <NavLink
                    className={`nav-link ${({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                        }`}
                    to={'/statistics'}>
                    <FontAwesomeIcon icon={faChartPie} />
                    <span>Statistic</span>
                </NavLink>
                <NavLink
                    className={`nav-link ${({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                        }`}
                    to={'/calendar'}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>Calender</span>
                </NavLink>
                <NavLink
                    className={`nav-link ${({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                        }`}
                    to={'/profile'}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Profile</span>
                </NavLink>
            </div>
        </div>)
};

export default Navigation;