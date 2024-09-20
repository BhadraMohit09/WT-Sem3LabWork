import React from "react";
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/home' class="nav-link" aria-current="page">GetAll</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/contact' class="nav-link">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
