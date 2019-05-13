import React, {Component} from 'react';
import { Link } from "react-router-dom";


class QuestionList extends Component {

    render() {
        let list = [];

        this.props.qas.forEach((elm) => {
            list.push(<li key={elm._id} id="spm_elm">
                <Link to={`/question/${elm._id}`}>{elm.questions }</Link>
            </li>)
        });

        return (
            <div>
                <h3>{this.props.header}</h3>
                <ul id="spm_list">
                    {list }
                </ul>

                <div >
                    <Link to={`/NewQuestion`} id="nyt_spm_button">Add new question</Link>
                </div>
            </div>

        );
    }
}

export default QuestionList;
