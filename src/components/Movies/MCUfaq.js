import React from 'react';
import QA from '../QA';

const MCUfaq = () => {
    return (
        <div>
            <div className="header-text">
                Your MCU Questions Answered
            </div>
            <QA 
                question="What is the MCU?"
                answer="The MCU refers to the Marvel Cinematic Universe. All the films and tv shows that comprise it were produced by Marvel Studios"
            />
            <QA
                question="So, what's NOT in the MCU?"
                answer="Older Marvel movies like the X-Men films. "
            />
            <QA
                question="Why are there Marvel movies that aren't in the MCU?"
                answer="Back in the 90's, Marvel was on the verge of bankruptcy. They sold the films rights to their most popular characters to help with that, so that's how studios like Fox, Sony, and Universal ended up with different Marvel characters."
            />
            <QA
                question=""
                answer=""
            />
            <QA
                question=""
                answer=""
            />
            <QA
                question=""
                answer=""
            />
            <QA
                question=""
                answer=""
            />
        </div>
    );
}

export default MCUfaq;