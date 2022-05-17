import React from 'react';

export default function ResumeSideBar({ userProfile, educationHistory }) {
  return (

    <div className="wrapper mt-lg-5">
      <div className="sidebar-wrapper">
        <div className="profile-container">
          <img className="profile" src="assets/images/profile.png" alt="" />
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
            <div className="item">
              <h4 className="degree">{entry.qualification}</h4>
              <h5 className="meta">{entry.institution}</h5>
              <div className="time">{entry.year_duration}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
