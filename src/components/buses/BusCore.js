import React from "react"
import { BusHalo } from "./BusHalo"
import { BusBox } from "./BusBox"
import { BusFloor } from "./BusFloor"
import "./Bus.css"

export const BusCore = ({ bus }) => {
    return <section className={`bus ${bus.chauffeured ? '✔️' : '❌' }`}>

        <BusHalo bus={bus} />
        <BusBox bus={bus} />
        <BusFloor bus={bus} />
    </section>
}
