import React from 'react';

export default function FormCareerSummary({ handleSummaryFormChange }) {
  return (
    <div className="row">
      <h1 className="page-title mt-4">Career Summary</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter a summary of your career/experience here." onChange={handleSummaryFormChange} />
      </div>
    </div>
  ); }
