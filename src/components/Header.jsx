import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg  ">
            <div class="container">
                <RouterLink class="navbar-brand" to="/"><img class='logo' src="./assets/images/logo.png" alt="" /></RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars className='fabars'/>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex ms-auto mb-2 mb-lg-0" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header