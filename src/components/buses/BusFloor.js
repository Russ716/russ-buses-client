import React from "react"
import "./Bus.css"
import { Link } from "react-router-dom"

export const BusFloor = ({ bus }) => {


    return <footer className="bus__floor">
        <div className="bus__employee">
        <button><Link to={`/buses/${bus.id}/request`} bus={bus}>Request Reservation</Link></button>
        </div>
        <div>  </div>
    </footer>
}
