import React, { Component } from 'react';
import alexa from './img/alexa.png';
import aws from './img/aws.png';
import music from './img/music.jpg';

class DeloitteReview extends Component {

    render() {
        return (
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={alexa} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={aws} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={music} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Deloitte</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeloitteReview;
