import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const HostNavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/buses">Rent a Bus</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/buses/new">Create a Bus</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/buses">My Buses</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/guests">My Renters</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/reservations">RSVP requests</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/rentals">Confirmed Rents</Link>
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
