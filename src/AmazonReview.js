import React, { Component } from 'react';
import alexa from './img/alexa.png';
import aws from './img/aws.png';
import music from './img/music.jpg';

class AmazonReview extends Component {

    render() {
        return (
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={alexa} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.43 Stars</div> <div>Average PTO: 8.4 days</div>
                        <div>Highlighted Comments: Too many hours, No relationship with management, difficult to move up, etc.</div>
                        <div>Average Salary in Division: $83,500</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={aws} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.32 Stars</div> <div>Average PTO: 6.1 days</div>
                        <div>Highlighted Comments: good events outside of work</div>
                        <div>Average Salary in Division: $82,300</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={music} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.57 Stars</div> <div>Average PTO: 10.2 days</div>
                        <div>Highlighted Comments: diverse projects</div>
                        <div>Average Salary in Division: $81,200</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AmazonReview;
