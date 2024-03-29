import React, { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const GuestRegister = () => {
    const [guest, setGuest] = useState({ "account_type": "guest" })
    const [serverFeedback, setFeedback] = useState("")
    const conflictDialog = useRef()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()
        fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(guest)
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                return res.json().then((json) => {
                    throw new Error(JSON.stringify(json))
                });
            })
            .then(createdUser => {
                localStorage.setItem("busboy", JSON.stringify(createdUser))
                history.push("/")
            })
            .catch(error => {
                setFeedback(JSON.parse(error.message).message)
            })
    }

    useEffect(() => {
        if (serverFeedback !== "") {
            conflictDialog.current.showModal()
        }
    }, [serverFeedback])

    const updateGuest = (evt) => {
        const copy = { ...guest }
        copy.mileageTraveled = 0
        copy[evt.target.id] = evt.target.value
        setGuest(copy)
    }


    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>{ serverFeedback }</div>
                <button className="button--close"
                    onClick={e => {
                        conflictDialog.current.close()
                        setFeedback("")
                    }}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register New Account</h1>
                <fieldset>
                    <label htmlFor="first_name"> First Name </label>
                    <input onChange={updateGuest}
                        type="text" id="first_name"
                        className="form-control" required autoFocus />
                    <div>
                    <label htmlFor="last_name"> Last Name </label>
                    <input onChange={updateGuest}
                        type="text" id="last_name"
                        className="form-control" required />
                    </div>
                    <div>
                    <label htmlFor="address"> Address </label>
                    <input onChange={updateGuest}
                        type="text"
                        id="address"
                        className="form-control" required />
                    </div>
                    <div>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateGuest}
                        type="email"
                        id="email"
                        className="form-control" required />
                    </div>
                    <div>
                    <label htmlFor="password"> Password </label>
                    <input onChange={updateGuest}
                        type="password"
                        id="password"
                        className="form-control" required />
                    </div>
                    
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

