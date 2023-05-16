import React from 'react'

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <section className='slider'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slider-content">
                <div className="logo">
                  <img src="assets/images/logo.svg" alt="logo" className="img-fluid" />
                  <p>LoffAlert</p>
                </div>
                
                <h2>Stay Ahead of LoffAlert with LoffAlert.</h2>
                <p>Keep your employees informed and empowered during company LoffAlert with our innovative mobile app.</p>
                <p>“I was informed about a potential layoff a week before it happened. This app gave me time to prepare and look for a new job.”</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="slider-img">
                <img src="assets/images/app1.png" alt="" className="img-fluid" />
                <img src="assets/images/app4.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='content'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="content-sec">
                <h3>Early notifications.</h3>
                <p>LayoffAlert notifies employees about a potential layoff before the official company announcement, providing ample time to prepare for the change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='content'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="content-sec">
                <h3>Personalized alerts.</h3>
                <p>Personalized notifications about the company's health and finances allow employees to preemptively prepare themselves during uncertain times.</p>

                <ul>
                  <li><a href="#"><img src="asssets/images/ios.png" alt="ios" className="img-fluid" /></a></li>
                  <li><a href="#"><img src="asssets/images/android.png" alt="android" className="img-fluid" /></a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="content-img">
                <img src="assets/images/app2.png" alt="" className="img-fluid" />
                <img src="assets/images/app3.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-carousel">
                <div className="item">
                  <h3>"LayoffAlert allowed me to communicate with management directly and receive updates as they happened. It made a difficult situation a bit easier."</h3>
                  <div className="user">
                    <img src="assets/images/avatar10.jpg" alt="Sara Ermington" className="img-fluid" />
                    <p>Sara Ermington</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='client'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="client-sec">
                <ul>
                  <li><img src="assets/images/avatar2.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar3.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar4.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar12.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar11.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar10.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar1.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar9.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar8.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar7.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar6.jpg" alt="avatar" /></li>
                  <li><img src="assets/images/avatar5.jpg" alt="avatar" /></li>
                </ul>

                <h3>We have a team in backend and our automated agents are monitoring 100s of data sources to get this information to you.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home