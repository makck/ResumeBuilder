import React from 'react';

export default function FormCareerSummary({ jobExperience, handleJobFormAdd, handleJobFormChange }) {
  return (
    <div className="row mt-4">
      <h1 className="page-title">Job Experience</h1>

      <div>
        {/* Same as in FormEducation.jsx */}
        {jobExperience.map((entry, index) => (
          <div key={`jobExperience-${index}`} className="mb-4">
            <div className="row mb-3">
              <div className="col">
                <input className="form-control" name="job_title" type="text" placeholder="Job Title" onChange={(event) => handleJobFormChange(event, index)} />
              </div>
              <div className="col">
                <input className="form-control" name="location" type="text" placeholder="Location" onChange={(event) => handleJobFormChange(event, index)} />
              </div>
              <div className="col">
                <input className="form-control" name="job_year_duration" type="text" placeholder="Year Duration" onChange={(event) => handleJobFormChange(event, index)} />
              </div>
            </div>
            <div>
              <textarea className="form-control" name="highlights" rows="3" placeholder="Enter your jobs highlight here." onChange={(event) => handleJobFormChange(event, index)} />
            </div>
          </div>
        ))}

        <div>
          <button className="btn btn-secondary mb-2" type="button" onClick={handleJobFormAdd}>Add another job experience entry</button>
        </div>
      </div>

    </div>
  ); }
