import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import ShowCard from '../../components/ShowCard';
import MovieCard from '../../components/MovieCard';
import Phase1 from '../../components/Phase1';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './InfinitySaga.css';

const InfinitySaga = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <h1 className="text">The Infinity Saga</h1>
            <div>
                <Button className="phaseBtn" onClick={toggle} color="primary" id="phase1" style={{ marginBottom: '1rem' }}>
                    Phase 1
                </Button>
                <Button className="phaseBtn" color="primary" id="phase2" style={{ marginBottom: '1rem' }}>
                    Phase 2
                </Button>
                <Button className="phaseBtn" color="primary" id="phase3" style={{ marginBottom: '1rem' }}>
                    Phase 3
                </Button>
            </div>
            <Phase1 />
        </div>
    );
}

export default InfinitySaga;