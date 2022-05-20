import React from 'react';

export default function FormEducation({
  educationHistorySubmit, educationHistory, handleEducationFormChange, handleEducationFormAdd,
}) {
  return (
    <div className="row mt-4">
      <h1 className="page-title">Education</h1>

      <div>
        <form className="form-inline" onSubmit={educationHistorySubmit}>

          {educationHistory.map((entry, index) => (
            <div key={`education-${index}`} className="row mb-3">
              <div className="col">
                <input className="form-control" name="qualification" type="text" placeholder="Qualification" onChange={(event) => handleEducationFormChange(event, index)} />
              </div>
              <div className="col">
                <input className="form-control" name="institution" type="text" placeholder="Institution" onChange={(event) => handleEducationFormChange(event, index)} />
              </div>
              <div className="col">
                <input className="form-control" name="year_duration" type="text" placeholder="Year Duration" onChange={(event) => handleEducationFormChange(event, index)} />
              </div>
            </div>
          ))}

          <div>
            <button className="btn btn-secondary mb-2" type="button" onClick={handleEducationFormAdd}>Add another education entry</button>
          </div>
        </form>
      </div>

    </div>
  ); }
