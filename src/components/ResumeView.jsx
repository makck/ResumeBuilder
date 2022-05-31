import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ResumePreview from './ResumePreview.jsx';

export default function ResumeView() {
  const [userProfile, setUserProfile] = useState({});
  const [educationHistory, setEducationHistory] = useState([]);
  const [careerSummary, setCareerSummary] = useState('');
  const [jobExperience, setJobExperience] = useState([]);

  const params = useParams();
  const { resumeId } = params;

  const getResume = () => {
    try {
      axios.get(`/get/resume/${resumeId}`)
        .then((result) => {
          setUserProfile(result.data.user);
          setEducationHistory(result.data.resume_details.education);
          setCareerSummary(result.data.resume_details.summary);
          setJobExperience(result.data.resume_details.experience);
          console.log('this is it', result.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { getResume(); }, []);

  return (
    <div className="mt-5">
      <div className="wrapper mt-lg-5">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="avartar-profile" src={`/${userProfile.profile_image}.jpg`} alt="" />
            <h1 className="name">
              {userProfile.first_name}
              {' '}
              {userProfile.last_name}
            </h1>
            <h3 className="tagline">{userProfile.role}</h3>
          </div>

          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email">
                <i className="fas fa-envelope" />
                <a href="mailto: yourname@email.com">{userProfile.email}</a>
              </li>
              <li className="phone">
                <i className="fas fa-phone" />
                <a href="tel:0123 456 789">{userProfile.mobile_number}</a>
              </li>
              <li className="linkedin">
                <i className="fab fa-linkedin-in" />
                <a href="#" target="_blank">{userProfile.linkedin}</a>
              </li>
              <li className="github">
                <i className="fab fa-github" />
                <a href="#" target="_blank">{userProfile.github_account}</a>
              </li>
            </ul>
          </div>

          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {educationHistory.map((entry, index) => (
              <div key={`education-${entry.instuition}`} className="item">
                <h4 className="degree">{entry.qualification}</h4>
                <h5 className="meta">{entry.institution}</h5>
                <div className="time">{entry.year_duration}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

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

        <section className="section experiences-section">
          <h2 className="section-title">
            <span className="icon-holder"><i className="fas fa-briefcase" /></span>
            Experiences
          </h2>

          {jobExperience.map((entry, index) => (

            <div key={`experience-${entry.job_title}`} className="item">
              <div className="meta">
                <div className="upper-row">
                  <h3 className="job-title">{entry.job_title}</h3>
                  <div className="time">{entry.job_year_duration}</div>
                </div>
                <div className="company">{entry.location}</div>
              </div>
              <div className="details wrap-text">
                <p>{entry.highlights}</p>
              </div>
            </div>
          ))}

        </section>
      </div>
    </div>
  );
}
