import React, { useState } from 'react';

export default function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Resume Builder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Industries</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <h1 className="page-title">User Profile</h1>

          <div className="form-inline">
            <form>
              <input className="form-control mb-2 mr-sm-2" type="text" name="first_name" placeholder="First Name" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="last_name" placeholder="Last Name" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="email" placeholder="Email Address" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="linkedin" placeholder="LinkedIn Address" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="github_account" placeholder="Github" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="mobile_number" placeholder="Mobile Number" />
              <button className="btn btn-secondary mb-2" type="submit">Add Profile</button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
