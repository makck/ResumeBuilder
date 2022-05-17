import React, { useState } from 'react';

import NavBar from './components/NavBar.jsx';
// User form components
import FormUserProfile from './components/FormUserProfile.jsx';
import FormEducation from './components/FormEducation.jsx';

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

  const [educationHistory, setEducationHistory] = useState([{
    qualification: '',
    institution: '',
    year_duration: '',
  }]);

  const userProfileSubmit = (event) => {
    event.preventDefault();
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

  const handleEducationFormAdd = () => {
    setEducationHistory([...educationHistory, {
      qualification: '',
      institution: '',
      year_duration: '',
    }]);
  };

  const handleEducationFormChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...educationHistory];
    list[index][name] = value;
    setEducationHistory(list);
  };

  const educationHistorySubmit = (event) => {
    event.preventDefault();
    setEducationHistory([...educationHistory]);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <FormUserProfile userProfileSubmit={userProfileSubmit} />
        <FormEducation educationHistorySubmit={educationHistorySubmit} educationHistory={educationHistory} handleEducationFormChange={handleEducationFormChange} handleEducationFormAdd={handleEducationFormAdd} />

        <div className="row">
          <h1>Resume Preview</h1>
          <ResumeSideBar userProfile={userProfile} educationHistory={educationHistory} />
        </div>
      </div>
    </div>
  );
}
