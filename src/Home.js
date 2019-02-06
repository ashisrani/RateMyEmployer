import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterPage from './FooterPage'
import image from './img/employer.jpg';

export class Home extends Component {
	render() {
		return (
				<div className="main-container">
          <div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-xl-5 align-middle spotify-img">
								<img className="img-fluid" src={image} />
							</div>
		
              <div className="w-100 d-xl-none"></div>
							<div className="col-xl-7 overview">
								<h2>Rate My Employer</h2>
								<p>
								Over the past couple of years, revelations in the technology industry surrounding workplace treatment have prompted employees to gain a further understanding of their company’s culture and internal system. Understanding both a team and employer that best suits an employee’s personal style of work is crucial in optimizing workplace efficiency and satisfaction. Prospective employees today need a platform that serves as an information bank on internal processes and expectations that a company may wield. A platform in which employer performance can be analyzed and shared to prospective employees allows for an efficient system of matching company and employee in order to optimize performance and satisfaction. 
                </p>

								<h2>Team Bios</h2>
								<h3>Trisha Asar</h3>
								<p>
								Skills: UI/UX Design, Data Analysis, Project Management, SQL
								Equity Research Analyst at JMP Securities (June 2017 - September 2017)
								Software Development Intern at One Convergence (June 2016 - September 2016) 
                </p>
								<h3>Chai Gangavarapu</h3>
								<p>
								Skills: Java, Javascript, C++, Data Analysis
								Summer Technology Analyst at Goldman Sachs (June 2018 - August 2018) 
								Software Engineering Intern at Intel (June 2017 - September 2017) 
								Software Development Intern at Medium One (June 2016 - September 2016)
								</p>
								<h3>Nikhil Goel</h3>
								<p>
								Skills: HTML, Technical Writing, JSON, Graphic Design
								Technical Business Analyst at Deloitte (June 2018 - August 2018) 
								Software Developer at Booz Allen Hamilton (June 2017 - August 2017) 
								Project Management Intern at Tesla (June 2016 - August 2016)
								</p>
								<h3>Ash Israni</h3>
								<p>
								Skills: Python, Information Securities, Financial Analysis
								Cyber Advisory Intern at KPMG (June 2018 - August 2018) 
								Software Engineering Intern at Booz Allen Hamilton (June 2017 - September 2017) 
								Revenue Management Intern at Pacifica Companies (June 2016 - September 2016)
								</p>
								<h3>Who do you want to hear from?</h3>
							  <ul>
									<li>Recent College Grads: Students looking for more information on companies they intend to work for</li>
									<li>Mid Career Professionals: Professionals who have multiple offers on the table looking to weigh their options between companies</li>
									<li>Professionals who have experienced misconduct in the workplace: How can our application help people like them avoid this issue?</li>
									<li>Informatics Students: We want our fellow students to test and review our preliminary platform</li>
									<li>Info Client Side Department: We would like a periodic review of our design in order to understand how to build an effective communal platform</li>
								</ul>
							
							</div>
						</div>
					</div>

					<br />
          

					
					<div className="container-fluid">
              <h2 className="mx-auto"></h2>
							<ul>
								<div className="col-sm">
									{/* <h3>
                    <Link to="/UserProfile">User Profile</Link>
									</h3> */}
									
									
									<p>
										
                                    </p>
								</div>
								<div className="col-sm">
									{/* <h3>
										<Link to='/Spotify/Artists'>Top Artists</Link>
                  </h3> */}
									<p>
										
                  </p>
								</div>
								<div className="col-sm">
                {/* <h3>
                <Link to='/Spotify/Songs'>Top Songs</Link>
                </h3> */}
                <p>
										
                </p>

								</div>
							</ul>
					</div>
	
          <br />

					<div>
						<section className="further-links container-fluid" id="further-link">
							<h4 className="card-title">Further Links and Resources</h4>
							<li>
								<a href="https://blog.ongig.com/employer-branding/the-top-5-sites-for-employer-reviews-ratings">Current Competitors to our Platform</a>
							</li>
						
						</section>
					</div>
					<FooterPage />
				
			</div>
		)
	}
}

export default Home;