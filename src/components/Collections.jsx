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

  // instead of doing a ternary operation here, i would probably just return early if there are no resumes. Could create a component to render the given p tag.
  /* const NoResourceComponent = ({ ReactNode }) => {
    return (
      <div className="container">
      <div className="row">
        <ReactNode />
      </div>
    </div>
    )
  }

  and in this component do:

  if (!resumes.length) return <NoResourceComponent Node={<p>No Resumes Stored</p>}/>

  something along these lines.

  Then you can do the map either directly within your return statement below or still store it in a variable with the knowledge that the length can't be 0 anymore. Up to you though :)!
  */

  const resumeList = !resumes.length ? <p>No Resumes Stored</p> : resumes.map((resume) => (
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

// this file should be named after the Component