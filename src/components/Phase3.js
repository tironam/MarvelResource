import React from 'react';
import MovieCard from './MovieCard.js'

const Phase3 = () => {
    return (
        <div className="container-fluid">
            <h1 className="text">Phase 3</h1>
            <div className="row text-center">
                <MovieCard
                    poster=""
                    title=""
                    synopsis=""
                    date=""
                    director=""
                    writer=""
                    trailer=""
                />
            </div>
        </div>
    )
}

export default Phase3;