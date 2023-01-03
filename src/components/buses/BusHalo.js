import React from "react"
import { Link } from "react-router-dom"
import "./Bus.css"

export const BusHalo = ({ bus }) => {
    return <header className="bus__halo">
        <div className="bus__customer">
            <Link to={`/buses/${bus.id}`} bus={bus}>🚌 Bus # {bus.id}</Link>
        </div>
    </header>
}
