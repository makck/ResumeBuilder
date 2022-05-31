import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CollectionsView() {
  const [resumes, setResumes] = useState([]);

  const getCollections = () => {
    try {
      axios.get('/collection-list')
        .then((result) => {
          setResumes(result.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { getCollections(); }, []);

  const resumeList = resumes.length === 0 ? <p>No Resumes Stored</p> : resumes.map((resume) => (
    <li key={resume.id}>
      <Link to={{ pathname: `/resume/${resume.id}` }} className="list-group-item list-group-item-action">
        <span>
          Resume
          {' '}
          {resume.id}
        </span>
      </Link>
    </li>
  ));

  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-4">Resume Collection</h1>
        <ul>
          {resumeList}
        </ul>
      </div>
    </div>
  );
}
