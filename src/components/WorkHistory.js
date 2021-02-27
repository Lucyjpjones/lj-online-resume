import React, { useState, useEffect } from 'react'
import '../App.css'
import './HeroSection.css'
import './TimeLine.css'

function WorkHistory() {

    return (
        <section id='work'>
            <div className='about-me' style={{'width':'60%', 'marginBottom':50}}>
                <h3 style={{'marginBottom':20}}>Work History</h3>
                <div class="row history">
                <div class="col-md-12" id="work-tl">
                  <div class="timeline-item" data-dates="11/2019 - 06/2020">
                    <h4>Debenhams</h4>
                    <p>Senior Assistant Merchandiser</p>
                  </div>
                  <div class="timeline-item" data-dates="05/2019 - 11/2019">
                    <h4>Foxtons</h4>
                    <p>Lettings Negotiator</p>
                  </div>
                  <div class="timeline-item" data-dates="09/2017 - 05/2019">
                    <h4>Debenhams</h4>
                    <p>Established Assistant Merchandiser</p>
                  </div>
                  <div class="timeline-item" data-dates="05/2017 - 09/2017">
                    <h4>House of Fraser</h4>
                    <p>Assistant Merchandiser</p>
                  </div>
                  <div class="timeline-item" data-dates="01/2015 - 05/2017">
                    <h4>House of Fraser</h4>
                    <p>Allocator</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default WorkHistory
