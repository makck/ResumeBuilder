import React, { useState } from 'react';

import NavBar from './components/NavBar.jsx';
// User form components
import FormUserProfile from './components/FormUserProfile.jsx';

// Reusme rendering components
import ResumeSideBar from './components/ResumeSideBar.jsx';

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
      <NavBar />
      <div className="container">
        <FormUserProfile userProfileSubmit={userProfileSubmit} />
        <div className="row">
          <h1>Resume Preview</h1>
          <ResumeSideBar userProfile={userProfile} />
        </div>
      </div>
    </div>
  );
}
