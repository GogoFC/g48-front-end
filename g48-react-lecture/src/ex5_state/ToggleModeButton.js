import React, { useState } from 'react';

const ToggleModeButton = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleModeHandler = () => {
        //console.log("button has been pressed!")
        setDarkMode(!darkMode);
    }


    return (
        <div className='container-fluid mt-4'>
                <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light' }`}>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
                    </a>
                    <img src={darkMode ? '/logo-light.png': '/logo-dark.png'}  />
                </div>
            </nav>

            <div>
                <h1>Content Below</h1>

                <button type='button' className={`btn ${darkMode ? 'btn-light' :"btn-dark"}`} onClick={toggleModeHandler}>Toggle Mode</button>
            </div>

        </div>
    );
};

export default ToggleModeButton;