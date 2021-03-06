import React, { Component } from 'react';
import alexa from './img/alexa.png';
import aws from './img/aws.png';
import music from './img/music.jpg';
import bing from './img/bing.jpg';
import xbox from './img/xbox.jpg';
import azure from './img/azure.png';


class MicrosoftReview extends Component {

    render() {
        return (
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={bing} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.75 Stars</div> <div>Average PTO: 10.2 days</div>
                        <div>Highlighted Comments: good work life-balance</div>
                        <div>Average Salary in Division: $90,500</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={xbox} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.69 Stars</div> <div>Average PTO: 12.3 days</div>
                        <div>Highlighted Comments: good events outside of work, good snacks at office</div>
                        <div>Average Salary in Division: $87,500</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={azure} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.69 Stars</div> <div>Average PTO: 12.3 days</div>
                        <div>Highlighted Comments: stressful deadlines, lots of hours</div>
                        <div>Average Salary in Division: $89,560</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MicrosoftReview;
