import React from 'react';

import './flight.css'

export const Flight = ({ flight }) => {
    const { flight_number, mission_name, launch_year, links: { mission_patch_small } }=flight

    return (
        <div className={'flight'}>
            <h2>{flight_number}. {mission_name}, launch year: {launch_year}</h2>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};
