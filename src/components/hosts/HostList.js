import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { fetchIt } from "../../utils/fetchIt"
import "./Hosts.css"

export const HostList = () => {
    const [hosts, changeHosts] = useState([])
    const [specialties, setSpecial] = useState("")

    useEffect(
        () => {
            fetchIt("http://localhost:8000/hosts")
                .then(changeHosts)
                .catch(() => changeHosts([]))
        },
        []
    )

    useEffect(() => {
        const justSpecialities = hosts.map(emp => emp.specialty)
        setSpecial(justSpecialities.join(", "))
    }, [hosts])


    return (
        <>
            <div className="specialities">
                <strong>Team Specialties</strong>: { specialties }
            </div>
            <h2>Host Roster</h2>
            {
                hosts.map(
                    (host) => {
                        return <Link key={`host--${host.id}`} to={`hosts/${host.id}`}>
                            <p>{host.full_name}</p>
                        </Link>
                    }
                )
            }
        </>
    )
}