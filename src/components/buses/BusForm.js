import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import { fetchIt } from "../../utils/fetchIt"


export const BusForm = () => {

    const BusBoy = localStorage.getItem("busboy")
    const [bus, updateBus] = useState({
        color: "",
        year: 0,
        make: "",
        model: "",
        odometer: 0,
        capacity: 0,
        owner: BusBoy.firstName + " " + BusBoy.lastName,
        image: "",
        chauffeured: false
    })
    const history = useHistory()

    const submitBus = (evt) => {
        evt.preventDefault()

        fetchIt(
            "http://localhost:8000/buses",
            { method: "POST", body: JSON.stringify(bus) }
        )
            .then(() => history.push("/buses"))
    }

    return (
        <form className="busForm">
            <h2 className="busForm__title">New Bus</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="color">Color:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.color = evt.target.value
                                updateBus(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="color"
                        className="form-control"
                        placeholder="The bus's dominant color"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year">Year:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.year = evt.target.value
                                updateBus(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="year"
                        className="form-control"
                        placeholder="The bus's year"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="make">Make:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.make = evt.target.value
                                updateBus(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="make"
                        className="form-control"
                        placeholder="The bus's make"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="model">Model:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.model = evt.target.value
                                updateBus(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="model"
                        className="form-control"
                        placeholder="The bus's model"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="odometer">Odometer:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.odometer = evt.target.value
                                updateBus(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="odometer"
                        className="form-control"
                        placeholder="The bus's odometer"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.capacity = evt.target.value
                                updateBus(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="capacity"
                        className="form-control"
                        placeholder="The bus's capacity"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.image = evt.target.value
                                updateBus(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="image"
                        className="form-control"
                        placeholder="The bus's image"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Chauffeured:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...bus}
                                copy.chauffeured = evt.target.checked
                                updateBus(copy)
                            }
                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <button onClick={submitBus} className="btn btn-primary">
                Submit Bus
            </button>
        </form>
    )
}