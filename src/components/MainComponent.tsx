import React from "react";
import App from "../App";
import {Route} from "react-router";

const MainComponent = () => {
    return <Route path={'/'}> <App /> </Route>
}
export default MainComponent;