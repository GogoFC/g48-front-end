import React from 'react';

const Header = () => {
    // js variables & functions

    const headerElement =
        <header className='container-fluid bg-danger text-white pt-3 pb-5'>
            <div>
                <h1>Header Content!</h1>
            </div>
        </header>

    return (
        <>
            <Nav />
            {/* Comment 
            - all JS code inside return need to be in curly-brackets. */}
            {headerElement} 
        </>
    );
}

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
