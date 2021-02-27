import React, { useState, useEffect } from 'react'
import '../App.css'
import './HeroSection.css'
import './TimeLine.css'

function Education() {

    return (
        <section id='education'>
            <div className='about-me' style={{'width':'60%', 'marginBottom':50}}>
                <h3 style={{'marginBottom':20}}>Education</h3>
                <div class="row history">
                <div class="col-md-12" id="work-tl">
                  <div class="timeline-item" data-dates="06/2020 - present">
                    <h4>Code Institute</h4>
                    <p>Full Stack Web Developer</p>
                  </div>
                  <div class="timeline-item" data-dates="05/2020">
                    <h4>Coursera (University of Michigan)</h4>
                    <p>Python for Everybody</p>
                  </div>
                  <div
                    class="col-md-12 timeline-item"
                    data-dates="09/2011 - 07/2014"
                  >
                    <h4>Leeds Beckett University</h4>
                    <p>
                      First Class Honors degree in Economics for Business (BA)
                    </p>
                  </div>
                  <div class="timeline-item" data-dates="09/2004 - 07/2011">
                    <h4>West Kirby Grammar School</h4>
                    <p>
                      4 A Level's: A to C,
                    </p>
                    <p>
                      10 GCSE's: A* to C including; Mathematics, English and
                      Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Education
