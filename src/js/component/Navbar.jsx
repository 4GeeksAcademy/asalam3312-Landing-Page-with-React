import React from 'react'

const Navbar = () => {
  return (
    /*  <nav className="navbar navbar-dark bg-dark d-flex justify-content-between">
       <div className="text-white">Start Bootstrap</div>
       <div className="d-flex justify-content-evenly text-white">
         <h2 className="m-1">Home</h2>
         <h2 className="m-1">About</h2>
         <h2 className="m-1">Services</h2>
         <h2 className="m-1">Contact</h2>
       </div>
     </nav> */
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid w-auto">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar