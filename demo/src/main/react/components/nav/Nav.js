import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'darkblue', color: 'white' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: 'white' }}>Web Dev Example</Link> {/* Use Link component for navigation */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/currentxkcdcomic" style={{ color: 'white' }}>Current Comic</Link> {/* Use Link component */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pastxkcdcomic" style={{ color: 'white' }}>Past Comic</Link> {/* Use Link component */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nasa-apod" style={{ color: 'white' }}>NASA API</Link> {/* Use Link component */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/weather-dashboard" style={{ color: 'white' }}>Weather Dashboard</Link> {/* Use Link component */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
