import React from 'react';

export default function ResumeSideBar({ careerSummary, jobExperience }) {
  return (
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

  );
}
