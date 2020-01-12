import React from 'react'
import Header from "../../../components/Header";

const Default = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <main>{props.children}</main>
        </React.Fragment>
    );
};

export default Default
