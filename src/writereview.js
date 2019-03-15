import React, { Component } from 'react';

class writeReview extends Component {

    sendAlert() {
        alert("Review Submitted")
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control col" id="exampleFormControlTextarea1" rows="3" placeholder="Company Name"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control col" id="exampleFormControlTextarea1" rows="3" placeholder="Review" ></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control col" id="exampleFormControlTextarea1" rows="3" placeholder="Job Title"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control col" id="exampleFormControlTextarea1" rows="3" placeholder="City"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control col" id="exampleFormControlTextarea1" rows="3" placeholder="Salary"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea className="form-control col" id="exampleFormControlTextarea1" rows="3" placeholder="Division"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1" className="col-2 col-form-label">Rating?</label>
                    <select className="form-control col" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                
              <button  onClick= {this.sendAlert} type="submit" class="btn btn-primary">Submit</button>       
             


            </form>
        )
    }
}

export default writeReview;
