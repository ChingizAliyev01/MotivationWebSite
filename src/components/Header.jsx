import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg  ">
            <div class="container">
                <RouterLink class="navbar-brand" to="/"><img class='logo' src="./assets/images/logo.png" alt="" /></RouterLink>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex ms-auto mb-2 mb-lg-0" role="search">
                        <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success btn-src" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header