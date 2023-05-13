import React from 'react'

export default function EduPage() {
    return (
        <div className='education-block container'>
             <div className="education-block-title">
             Education and certificates
            </div>
          <div className="education-row">
                <div className="education_date">2008-2013</div>
                <div className="wrapper">
                    <div className="education_place">Donetsk National Technical University</div>
                    <div className="education_place">direction of computer science and technology</div>
                </div>
                
          </div>
          <div className="education-row">
                <div className="education_date">2021-2012</div>
                <div className="wrapper">
                    <div className="education_place">IT STEP academy</div>
                    <div className="education_place">Frontend</div>
                </div>
                
          </div>
          <div className="education-row">
                <div className="education_date">February 2023-March 2023</div>
                <div className="wrapper">
                    <div className="education_place">SRK</div>
                    <div className="education_place">Projekt Access 
                    Arbeitsmarkt</div>
                </div>
                
          </div>
          <div className="education-row">
                <div className="education_date">January 2023-now</div>
                <div className="wrapper">
                    <div className="education_place">ECAP</div>
                    <div className="education_place">German Intensiv</div>
                </div>
                
          </div>
          <div className="education-block-lang">
            <div className="education-block-title">
                Languages
            </div>
            <div className="education-row">
            English - B2
            </div>
            <div className="education-row">
            German- A2
            </div>
            <div className="education-row">
            Russian, Ukrainian - Native
            </div>
          </div>
          <div className="education-block-lang">
            <div className="education-block-title">
                Credentials
            </div>
            <div className="education-row">
                <div className="education_date">Projekt Access Arbeitsmarkt</div>
                <div className="wrapper">
                    <div className="education_place">Res Menzi, <a href="mailto:res.menzi@srk-bern.ch">res.menzi@srk-bern.ch</a> </div>
                    <div className="education_place">Florence zu Dohna, <a href="mailto:florence.zudohna@gmail.com">florence.zudohna@gmail.com</a></div>
                </div>
                
          </div>
          </div>
        </div>
    )
}