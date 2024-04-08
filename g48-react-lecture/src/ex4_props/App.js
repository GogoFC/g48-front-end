import React from 'react';
import Header, { Nav } from './Header';

const App = () => {

    const headerText = "MyApp UI";
    const pagePrimaryColor = "info";

    const logo = "logo.jpg";
    const links = ["Login", "Sign Up", "About"];


    return (
        <div>

            <Nav logo={logo} links={links} />

            <Header text={headerText} bgColor={pagePrimaryColor} />
            <Header />
            <Header text={"App UI 2"} bgColor="danger" />

            <Nav logo={logo} links={["Login", "Register", "Search",]} />


        </div>
    );
};

export default App;