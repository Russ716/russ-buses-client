import React from "react"
import "./Bus.css"

export const BusBox = ({ bus }) => {
    
    const iconUrl = `https://picsum.photos/id/${bus.id}/160/90?blur=3`;
    return <div className="bus__body">
        <div className="bus__description">
            <img src={iconUrl} alt="random art" />
        <p style={{color: `${bus.color}`}} >
                {bus.color} {bus.year} {bus.make} {bus.model} 
        </p>
            
                
        </div>
        
    </div>
    
}
