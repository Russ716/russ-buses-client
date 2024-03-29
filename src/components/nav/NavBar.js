import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/buses">The Buses</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/hosts">The Hosts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/reservations">My reservations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/rentals">My Rentals</Link>
            </li>

            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("busboy")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}
