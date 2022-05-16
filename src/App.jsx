import React, { useState } from 'react';

export default function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Resume Builder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Industries</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <h1 className="page-title">User Profile</h1>

          <div className="form-inline">
            <form>
              <input className="form-control mb-2 mr-sm-2" type="text" name="first_name" placeholder="First Name" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="last_name" placeholder="Last Name" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="email" placeholder="Email Address" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="linkedin" placeholder="LinkedIn Address" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="github_account" placeholder="Github" />
              <input className="form-control mb-2 mr-sm-2" type="text" name="mobile_number" placeholder="Mobile Number" />
              <button className="btn btn-secondary mb-2" type="submit">Add Profile</button>
            </form>
          </div>

        </div>

        <div className="row">
          <h1>Resume Preview</h1>
          <div className="wrapper mt-lg-5">
            <div className="sidebar-wrapper">
              <div className="profile-container">
                <img className="profile" src="assets/images/profile.png" alt="" />
                <h1 className="name">Alan Doe</h1>
                <h3 className="tagline">Full Stack Developer</h3>
              </div>

              <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                  <li className="email">
                    <i className="fas fa-envelope" />
                    <a href="mailto: yourname@email.com">alan.doe@website.com</a>
                  </li>
                  <li className="phone">
                    <i className="fas fa-phone" />
                    <a href="tel:0123 456 789">0123 456 789</a>
                  </li>
                  <li className="linkedin">
                    <i className="fab fa-linkedin-in" />
                    <a href="#" target="_blank">linkedin.com/in/alandoe</a>
                  </li>
                  <li className="github">
                    <i className="fab fa-github" />
                    <a href="#" target="_blank">github.com/username</a>
                  </li>
                </ul>
              </div>
              <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                  <h4 className="degree">MSc in Computer Science</h4>
                  <h5 className="meta">University of London</h5>
                  <div className="time">2016 - 2018</div>
                </div>
                <div className="item">
                  <h4 className="degree">BSc in Applied Mathematics</h4>
                  <h5 className="meta">Bristol University</h5>
                  <div className="time">2012 - 2016</div>
                </div>
              </div>

              <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                  <li>
                    English
                    {' '}
                    <span className="lang-desc">(Native)</span>
                  </li>
                  <li>
                    French
                    {' '}
                    <span className="lang-desc">(Professional)</span>
                  </li>
                  <li>
                    Spanish
                    {' '}
                    <span className="lang-desc">(Professional)</span>
                  </li>
                </ul>
              </div>

              <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                  <li>Climbing</li>
                  <li>Snowboarding</li>
                  <li>Cooking</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
