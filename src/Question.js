import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NewAnswers from "./NewAnswers";
import CountFunction from "./CountFunction";


class Question extends Component {

    render() {
        let question = this.props.questions;
        let list = [];
        console.log(this.props)
        if(!question) return (<div>...loading</div>)
        question.answers.forEach((answer) => {
            list.push(<li>
                {answer.answers} <CountFunction answer={answer} id={this.props.match.params.id}/>
            </li>)
        });



        return (
            <div>
                <h3>{question.questions}</h3>

                <p>
                    answers:   </p>
                <ul>
                    {list }
                </ul>

                <NewAnswers addAnswers={this.props.addAnswers}   id={this.props.match.params.id} />




            </div>
        );
    }
}

export default Question;