import React from 'react';
import QA from '../../components/QA';
import { Button } from 'reactstrap';
import ScrollUpButton from "react-scroll-up-button";
import MCUfaq from '../../components/Movies/MCUfaq';

const FAQ = () => {
    return (
        <div className="Container">
            <ScrollUpButton />
            <div className="header-text">
                Your Marvel Questions Answered
            </div>
            <div className="answer-text text-center">What's the best order to watch the movies in? Is Venom part of the MCU? Why can't Walt Disney World have an Avengers Campus? Time to find out.</div>
            <div className="text">
                <Button size="lg" className="phaseBtn navColor phase1" color="danger" href="#MCU" style={{ marginBottom: '1rem' }}>
                    MCU & Other Marvel Films
                </Button>
                <Button size="lg" className="phaseBtn navColor phase1" color="danger" href="#Spidey" style={{ marginBottom: '1rem' }}>
                    Spider-Man's Film Rights
                </Button>
                <Button size="lg" className="phaseBtn phase1" color="danger" href="#oldmarvelshows" style={{ marginBottom: '1rem' }}>
                    The Old Marvel Shows
                </Button>
                <Button size="lg" className="phaseBtn phase1" color="danger" href="#Disney" style={{ marginBottom: '1rem' }}>
                    Marvel & Theme Parks
                </Button>
            </div>
            <div className="header-text" id="MCU">
                MCU & Other Marvel Films
            </div>
            <MCUfaq />
        </div>
    );
}

export default FAQ;