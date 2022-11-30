import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div class='container-fluid'>
          <Link class='navbar-brand ms-5' to='/'>
            JUST DO IT
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarColor02'>
            <ul class='navbar-nav me-auto'>
              <li class='nav-item'>
                <Link
                  class='nav-link active px-5'
                to='/todotable'
                >
                  DO LIST
                  <span class='visually-hidden'>(current)</span>
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link active px-5' to='/todoopen'>
                  OPEN
                  <span class='visually-hidden'>(current)</span>
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link active px-5' to='/todoclosed' >
                  CLOSED
                  <span class='visually-hidden'>(current)</span>
                </Link>
              </li>
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-sm-3'
                type='text'
                placeholder='Search'
              />
              <button class='btn btn-secondary my-2 my-sm-0 me-5' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
