import React from "react"
import { Route } from "react-router-dom"
import { BusList } from "./buses/BusList"
import { Bus } from "./buses/Bus"
import { BusForm } from "./buses/BusForm"
import { RequestForm } from "./rsrvtnRqst/requestForm"
import { MainPage } from "./MainPage"
import { HostList } from "./hosts/hostListing"



export const ApplicationViews = () => {

    return (
        <>
            <Route exact path="/">
                <MainPage />
            </Route>

            <Route exact path="/buses">
                <BusList />
            </Route>
            <Route exact path="/reservations">
                <BusList />
            </Route>

            <Route exact path="/buses/:busId(\d+)">
                < Bus />
            </Route>
            <Route exact path="/hosts">
                <HostList />
            </Route>
            <Route path="/buses/create">
                <BusForm />
            </Route>
            <Route path="/buses/:busId(\d+)/request">
                <RequestForm />
            </Route>
        </>
    )
}