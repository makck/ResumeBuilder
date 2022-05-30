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

  // Job Experience
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
        <Routes>
          <Route
            path="/"
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
        </Routes>

      </div>
    </div>
  );
}
