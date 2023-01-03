import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { HostViews } from "./HostViews";
import { NavBar } from "./nav/NavBar";
import { HostNavBar } from "./nav/HostNavBar";
import { Login } from "./auth/Login";
import { GuestRegister } from "./auth/GuestRegister";
import { HostRegister } from "./auth/HostRegister";
import "./RussBus.css";
import { isStaff } from "../utils/isStaff";

export const RussBuses = () => {
  return (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("busboy")) {
            if (isStaff()) {
              return <>
                  <HostNavBar />
                  <HostViews />
                </>
            }
            else {
              return <>
                  <NavBar />
                  <ApplicationViews />
                </>
            }
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <GuestRegister />
      </Route>
      <Route path="/registerhost">
        <HostRegister />
      </Route>
    </>
  )
}