import React from 'react';

export default function UserProfileForm({ userProfileSubmit }) {
  return (
    <div className="row mt-4">
      <h1 className="page-title">User Profile</h1>

      <div>
        <form className="form-inline" onSubmit={userProfileSubmit}>
          <div className="row">
            <div className="col">
              <input className="form-control" type="text" name="first_name" placeholder="First Name" />
            </div>
            <div className="col">
              <input className="form-control" type="text" name="last_name" placeholder="Last Name" />
            </div>
            <div className="col">
              <input className="form-control" type="text" name="role" placeholder="Role" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <input className="form-control" type="text" name="email" placeholder="Email Address" />
            </div>
            <div className="col">
              <input className="form-control" type="text" name="linkedin" placeholder="LinkedIn Address" />
            </div>
            <div className="col">
              <input className="form-control" type="text" name="github_account" placeholder="Github" />
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-4">
              <input className="form-control" type="text" name="mobile_number" placeholder="Mobile Number" />
            </div>
          </div>

          <button className="btn btn-secondary mb-2" type="submit">Add Profile</button>
        </form>
      </div>

    </div>
  );
}
