import React, { Component } from 'react';
import Question from "./Question";


class NewAnswers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: "",
            input: "",

        };

        this.handleInput = this.handleInput.bind(this);
        this.onChangeAnswers = this.onChangeAnswers.bind(this);


    }




    onChangeAnswers(event) {
        this.setState({
            answers: event.target.value
        });
    }



    handleInput(event) {
        this.props.addAnswers(this.state.answers, this.props.id);
        this.setState({
            onSucess: <h2>Du har tilføjet {this.state.answers} </h2>
        })
    }
    render() {
        return (

            <div >

                <div >
                    <label> Tilføj et nyt svar</label>
                    <br />
                    <input type="text" id={Question.id} onChange={this.onChangeAnswers} ></input>

                    <br />
                    <button onClick={this.handleInput}
                            type="submit" id="submitButton" className="btn btn-primary"> Tilføj en svar
                    </button>
                    {this.state.onSucess}
                </div>

            </div>
        )
    }
}

export default NewAnswers;