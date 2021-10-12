import React from 'react';

const QA = (props) => {
    const {
        question,
        answer
    } = props; 

    return (
        <div className="faq">
            <h3 className="question-text">{question}</h3>
            <p className="answer-text">{answer}</p>
        </div>
    );
}

export default QA;