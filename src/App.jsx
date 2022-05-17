import React, { useState } from 'react';

import ResumeUserProfile from './components/resumeUserProfile.jsx';

export default function App() {
  const [userProfile, setUserProfile] = useState({
    first_name: 'test',
    last_name: 'test2',
    role: '',
    email: '',
    linkedin: '',
    github_account: '',
    mobile_number: 0,
  });

  const userProfileSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);
    setUserProfile((prev) => ({
      ...prev,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      role: event.target.role.value,
      email: event.target.email.value,
      linkedin: event.target.linkedin.value,
      github_account: event.target.github_account.value,
      mobile_number: event.target.mobile_number.value,
    }));
  };

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

          <div>
            <form className="form-inline" onSubmit={userProfileSubmit}>
              <input className="form-control mb-2 mr-sm-2" type="text" name="first_name" placeholder="First Name" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="last_name" placeholder="Last Name" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="role" placeholder="Role" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="email" placeholder="Email Address" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="linkedin" placeholder="LinkedIn Address" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="github_account" placeholder="Github" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="mobile_number" placeholder="Mobile Number" />
              <button className="btn btn-secondary mb-2" type="submit">Add Profile</button>
            </form>
          </div>

        </div>

        <ResumeUserProfile userProfile={userProfile} />
      </div>

    </div>
  );
}
