import React from "react"
import { isStaff } from "../../utils/isStaff"
import "./Bus.css"

export const BusBox = ({ bus }) => {

    

    return <div className="bus__body">
        <div className="bus__description">
            {bus.color} {bus.year} {bus.make} {bus.model} 
        </div>
        
        
        
        

    </div>

}
