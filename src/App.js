import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import QuestionList from "./QuestionList";
import Question from "./Question";
import NotFound from "./NotFound";
import NewQuestion from "./NewQuestion";
import NewAnswers from "./NewAnswers";




class App extends Component {

    api_url = process.env.REACT_APP_API_URL;

    constructor(props) {
        super(props);

        // TODO: Move this data to the server
        this.state = {
            qas: [
            ],

        };

        this.addQuestion = this.addQuestion.bind(this);
        this.addAnswers = this.addAnswers.bind(this);
    }


    componentDidMount(){
        fetch(`${this.api_url}/questions`)
            .then(response => { return response.json()})
            .then(data => this.setState({qas: data}))
            .catch(err => console.error(err))
    }


    addQuestion(questions) {

        console.log((questions))
        fetch(`${this.api_url}/NewQuestion`, {
            method: 'POST',
            body: JSON.stringify({
                questions: questions,

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log("Result of posting a new Question");
                console.log(json);
            });
    }



    addAnswers(answers, id) {
        fetch(`${this.api_url}/answers/${id}`, {
            method: 'post',
            body: JSON.stringify({
                answers: answers,

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log("Result of posting a new Answer");
                console.log(json);
            });
    }




    // TODO: Remove these two methods
    getQuestionFromId(id) {
        console.log()
        return this.state.qas.find((elm) => elm._id === id);
    }


    getAnswersFromId(id) {
        return this.state.qas.find((elm) => elm._id === id);
    }


    render() {
        return (
            <Router>
                <div className="container">
                    <h1>Questions!</h1>

                    <Switch>
                        <Route exact path={'/'}
                               render={(props) =>
                                   <QuestionList {...props}
                                                 qas={this.state.qas}
                                                 header={'All questions'}/>}
                        />

                        <Route exact path={'/question/:id'}
                               render={(props) =>
                                   <Question {...props}
                                             questions={this.getQuestionFromId(props.match.params.id) } addAnswers={this.addAnswers}   answers={this.getAnswersFromId(props.match.params.id)} />



                               }
                        />



                        <Route exact path={'/NewQuestion'}
                               render={(props) =>
                                   <NewQuestion {...props}  addQuestion={this.addQuestion}  ></NewQuestion>}/>

                        <Route exact path={'/NewAnswers'}
                               render={(props) =>
                                   <NewAnswers {...props}  addAnswers={this.addAnswers}   answers={this.getAnswersFromId(props.match.params.id)} ></NewAnswers>}/>


                        <Route component={NotFound} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
