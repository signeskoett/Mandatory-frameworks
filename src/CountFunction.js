import React from 'react';

class CountFunction extends React.Component {
    state = { count: 0 }

    componentDidMount() {
        this.setState({
            count:this.props.answer.votes
        })
    }

    increment = () => {
        this.setState({
                count: this.state.count + 1
            },
            ()=> {
                this.voteOnAnswer()
            }
        );
    }

    decrement = () => {
        this.setState({
                count: this.state.count - 1
            },
            () => {
                console.log(this.state.count)
                this.voteOnAnswer()
            }

        );
    }


    voteOnAnswer() {
        let { answer, id } = this.props
        fetch('https://signe-frameworks.herokuapp.com/api/votes/' + id, {
            method: 'post',
            body: JSON.stringify({
                answerId: answer._id,
                count: this.state.count

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



    render() {
        return (
            <div>

                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.state.count} </span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    };
}


export default CountFunction;