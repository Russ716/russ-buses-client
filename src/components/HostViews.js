import React from "react"
import { Route } from "react-router-dom"
import { GuestRegister } from "./auth/GuestRegister"
import { Bus } from "./buses/Bus"
import { BusEdit } from "./buses/BusEdit"
import { BusForm } from "./buses/BusForm"
import { BusList } from "./buses/BusList"
import { GuestList } from "./guests/GuestList";
import { HostList } from "./hosts/HostList";
import { MainPage } from "./MainPage"
import { RequestForm } from "./rsrvtnRqst/requestForm"

export const HostViews = () => {

    return (
        <>
            <Route exact path="/guests">
                <GuestList />
            </Route>

            <Route exact path="/">
                <MainPage/>
            </Route>

            <Route exact path="/buses">
                <BusList />
            </Route>

            <Route exact path="/buses/:busId(\d+)">
                <Bus/>
            </Route>
            
            <Route exact path="/buses/:busId(\d+)/edit">
                <BusEdit/>
            </Route>
            
            <Route path="/buses/:busId(\d+)/request">
                <RequestForm />
            </Route>

            <Route path="/buses/new">
                <BusForm/>
            </Route>

            <Route exact path="/hosts">
                <HostList />
            </Route>

            <Route exact path="/hosts/:hostId(\d+)">
                <></>
            </Route>

            <Route path="/hosts/create">
                <GuestRegister/>
            </Route>

        </>
    )
}
