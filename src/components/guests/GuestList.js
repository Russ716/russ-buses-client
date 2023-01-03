import React, { useEffect, useState } from "react"
import { fetchIt } from "../../utils/fetchIt"

export const GuestList = () => {
    const [guests, setGuests] = useState([])
    const [totalGuestMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetchIt("http://localhost:8000/guests")
                .then(setGuests)
                .catch(() => setGuests([]))
        }, []
    )

    useEffect(
        () => {
            if (guests.length === 1) {
                updateMessage("You have 1 guest")
            }
            else {
                updateMessage(`You have ${guests.length} guests`)
            }
        },
        [guests]
    )

    return (
        <>
            <h2>Guest List</h2>
            <div>{totalGuestMessage}</div>
            {
                guests.map(
                    (guestObject) => {
                        return <p key={`guest--${guestObject.id}`}>{guestObject.full_name}</p>
                    }
                )
            }
        </>
    )
}