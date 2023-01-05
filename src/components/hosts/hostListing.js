import React, { useEffect, useState } from "react"
import { fetchIt } from "../../utils/fetchIt"

export const HostList = () => {
    const [hosts, setHosts] = useState([])
    const [totalHostMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetchIt("http://localhost:8000/hosts")
                .then(setHosts)
                .catch(() => setHosts([]))
        }, []
    )

    useEffect(
        () => {
            if (hosts.length === 1) {
                updateMessage("There is 1 host")
            }
            else {
                updateMessage(`There are ${hosts.length} hosts:`)
            }
        },
        [hosts]
    )

    return (
        <>
            <h2>Host List</h2>
            <div>{totalHostMessage}</div>
            {
                hosts.map(
                    (hostObject) => {
                        return <p key={`host--${hostObject?.id}`}>{hostObject?.full_name}</p>
                    }
                )
            }
        </>
    )
}