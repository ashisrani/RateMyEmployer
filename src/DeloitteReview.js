import React, { Component } from 'react';
import alexa from './img/alexa.png';
import aws from './img/aws.png';
import music from './img/music.jpg';
import digital from './img/DeloitteDigital.svg'
import consulting from './img/deloitte-consulting.svg'

class DeloitteReview extends Component {

    render() {
        return (
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={consulting} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.13 Stars</div> <div>Average PTO: 6.5 days</div>
                        <div>Highlighted Comments: lots of travel</div>
                        <div>Average Salary in Division: $65,000</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={digital} alt="Card image cap"/>
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text"> 
                        <div>Overall Score: 4.23 Stars</div> <div>Average PTO: 7.6 days</div>
                        <div>Highlighted Comments: leadership is hard to connect with</div>
                        <div>Average Salary in Division: $60,000</div>
                    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeloitteReview;
