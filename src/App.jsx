import React, { useState } from 'react';

import axios from 'axios';
import {
  BrowserRouter, Routes,
  Route,
  Link, useNavigate,
} from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
// User form components
import FormUserProfile from './components/FormUserProfile.jsx';
import FormEducation from './components/FormEducation.jsx';
import FormCareerSummary from './components/FormCareerSummary.jsx';
import FormExperience from './components/FormExperience.jsx';

// Reusme rendering components
import ResumePreview from './components/ResumePreview.jsx';

import CollectionsView from './components/Collections.jsx';
import ResumeView from './components/ResumeView.jsx';

// we could use a default state variable here if we would like to and use it below
/*

const defaultUserProfileState = {
    first_name: '',
    last_name: '',
    role: '',
    email: '',
    linkedin: '',
    github_account: '',
    mobile_number: 0,
  }

*/

export default function App() {
  // User Profile
  const [userProfile, setUserProfile] = useState({
    first_name: '',
    last_name: '',
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

  // ideally we always define all state at the top of the component
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
  // ideally we always define all state at the top of the component
  const [careerSummary, setCareerSummary] = useState('');

  const handleSummaryFormChange = (event, index) => {
    const summaryValue = event.target.value;
    let tempString = careerSummary;
    tempString = summaryValue;
    setCareerSummary(tempString);
  };

  // Job Experience
  // ideally we always define all state at the top of the component
  const [jobExperience, setJobExperience] = useState([{
    job_title: '',
    location: '',
    job_year_duration: '',
    highlights: '',
  }]);

  const handleJobFormAdd = () => {
    setJobExperience([...jobExperience, {
      job_title: '',
      location: '',
      job_year_duration: '',
      highlights: '',
    }]);
  };

  const handleJobFormChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...jobExperience];
    list[index][name] = value;
    setJobExperience(list);
  };

  const createUser = () => {
    axios.post('/create-user', {
      // if this data is equivalent to the state, why not just use userProfile as the data object?
      first_name: userProfile.first_name,
      last_name: userProfile.last_name,
      email: userProfile.email,
      github_account: userProfile.github_account,
      linkedin: userProfile.linkedin,
      mobile_number: userProfile.mobile_number,
    })
      .then((result) => {
        console.log(result);
      });
  };

  const createResume = () => {
    const inputData = {
      education: educationHistory,
      summary: careerSummary,
      experience: jobExperience,
    };
    axios.post('/create-resume', inputData)
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              // i think you could create a new component for this element, would probably require some refactoring though!
              element={(
                <>
                  <FormUserProfile userProfileSubmit={userProfileSubmit} createUser={createUser} />
                  {' '}
                  <FormEducation educationHistorySubmit={educationHistorySubmit} educationHistory={educationHistory} handleEducationFormChange={handleEducationFormChange} handleEducationFormAdd={handleEducationFormAdd} />
                  <FormCareerSummary handleSummaryFormChange={handleSummaryFormChange} />
                  <FormExperience jobExperience={jobExperience} handleJobFormAdd={handleJobFormAdd} handleJobFormChange={handleJobFormChange} />

                  <ResumePreview createResume={createResume} userProfile={userProfile} educationHistory={educationHistory} careerSummary={careerSummary} jobExperience={jobExperience} />
                </>
            )}
            />
            <Route path="/collections" element={<CollectionsView />} />
            <Route path="/resume/:resumeId" element={<ResumeView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

// I think you could create a Form folder, in which you keep the form related components. Same with Resume.
// Doing that, you will have a better overview, clearer state handling and overall a nicer architecture on your React app.