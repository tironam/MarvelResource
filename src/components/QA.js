import React from 'react'

const QA = (props) => {
    const {
        id,
        question,
        answer
    } = props 

    return (
        <div className="faq">
            <h3 className="question-text" id={id}>{question}</h3>
            <p className="answer-text">{answer}</p>
        </div>
    )
}

export default QA