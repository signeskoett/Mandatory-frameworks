import React, {Component} from 'react';

class NewQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {

            questions: "",
            input: "",
            answers: this.props.answers,

        };

        this.onChange = this.onChange.bind(this);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    onChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    onChangeQuestion(event) {
        this.setState({
            questions: event.target.value
        });
    }


    handleInput(event) {
        this.props.addQuestion(this.state.questions);
        this.setState({
            onSucess: <h2>Du har tilføjet {this.state.questions} </h2>
        })
    }


    render() {
        return (
            <div>


                <p>
                    Question:
                    <input onChange={this.onChangeQuestion} id="question" name="questions" type="text"/>
                </p>

                <button onClick={this.handleInput}
                        type="submit" id="submitButton"> Tilføj et spørgsmål
                </button>
                <p className="message text-danger">{this.state.message}</p>
                {this.state.onSucess}
            </div>
        );
    }
}
export default NewQuestion;
