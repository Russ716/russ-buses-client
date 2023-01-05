import React, { useEffect, useState } from "react"
import { fetchIt } from "../../utils/fetchIt"
import { BusCore } from "./BusCore"
import "./Bus.css"


export const BusList = () => {
    const [allBuses, setAllBuses] = useState([])
    const [someBuses, setSomeBuses] = useState([])
    

    // useEffect(() => {
    //     fetchIt("http://localhost:8000/buses")
    //         .then((buses) => {
    //             setOriginal(buses)
    //         })
    //         .catch(() => setOriginal([]))
    // }, [])

    useEffect(
        () => {
            fetchIt("http://localhost:8000/buses")
                .then(setAllBuses)
                .catch(() => setAllBuses([]))
        }, []
    )

    const filterBuses = (chauffeured) => {
        fetchIt(`http://localhost:8000/buses?chauffeured=${chauffeured}`)
            .then((someBuses) => {
                setSomeBuses(someBuses)
            })
            .catch(() => setSomeBuses([]))
    }

    return <>
        <div>
            {/* <button onClick={() => filterBuses("done")}>Show Chauffeured Only</button>
            <button onClick={() => filterBuses("all")}>Show All Buses</button> */}
        </div>
        <div className="activeBuses"></div>
        <article className="wrapper">
            { allBuses.map((bus) => <BusCore key={`bus--${bus.id}`} bus={bus}/>) }
        </article>
    </>
}

