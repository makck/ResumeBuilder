import React, { useState } from 'react';

import NavBar from './components/NavBar.jsx';
// User form components
import FormUserProfile from './components/FormUserProfile.jsx';
import FormEducation from './components/FormEducation.jsx';
import FormCareerSummary from './components/FormCareerSummary.jsx';

// Reusme rendering components
import ResumeSideBar from './components/ResumeSideBar.jsx';

export default function App() {
  // User Profile
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

  // Education History

  const [educationHistory, setEducationHistory] = useState([{
    qualification: '',
    institution: '',
    year_duration: '',
  }]);

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

  // Career Summary
  const [careerSummary, setCareerSummary] = useState('');

  const handleSummaryFormChange = (event, index) => {
    const summaryValue = event.target.value;
    let tempString = careerSummary;
    tempString = summaryValue;
    setCareerSummary(tempString);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <FormUserProfile userProfileSubmit={userProfileSubmit} />
        <FormEducation educationHistorySubmit={educationHistorySubmit} educationHistory={educationHistory} handleEducationFormChange={handleEducationFormChange} handleEducationFormAdd={handleEducationFormAdd} />
        <FormCareerSummary handleSummaryFormChange={handleSummaryFormChange} />

        <div className="row mt-4">
          <h1>Resume Preview</h1>
          <div className="wrapper mt-lg-5">
            <ResumeSideBar userProfile={userProfile} educationHistory={educationHistory} />

            <div className="main-wrapper">

              <section className="section summary-section">
                <h2 className="section-title">
                  <span className="icon-holder"><i className="fas fa-user" /></span>
                  Career Profile
                </h2>
                <div className="summary">
                  <p>
                    {careerSummary}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
