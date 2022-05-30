import React from 'react';

import ResumeSideBar from './ResumeSideBar.jsx';
import ResumeMainSection from './ResumeMainSection.jsx';

export default function ResumePreview({
  createResume, userProfile, educationHistory, careerSummary, jobExperience,
}) {
  return (
    <div className="row mt-4">
      <h1 className="col mb-3">Resume Preview</h1>
      <button className="btn btn-warning col-3 mb-4" type="button" onClick={createResume}>Save Resume</button>
      <div className="wrapper mt-lg-5">
        <ResumeSideBar userProfile={userProfile} educationHistory={educationHistory} />

        <ResumeMainSection careerSummary={careerSummary} jobExperience={jobExperience} />
      </div>
    </div>

  );
}
