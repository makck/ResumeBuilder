import React, { useState } from 'react';

export default function App() {
  return (
    <div>

      <div className="container">
        <div className="row">
          <h1 className="page-title">Resume Builder</h1>

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
