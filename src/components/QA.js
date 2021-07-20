import React from 'react';

const QA = (props) => {
    return (
        <div className="faq">
            <h3 className="question-text">{props.question}</h3>
            <p className="answer-text">{props.answer}</p>
        </div>
    );
}

export default QA;