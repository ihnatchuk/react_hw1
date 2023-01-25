import React, {useEffect, useState} from 'react';

import {flightService} from "../api";
import {Flight} from "./Flight";
import './flights.css'
export const Flights = () => {
    const [flights, setFlights]=useState([]);

    useEffect(()=>{
        flightService.getAll()
            .then(flights=>setFlights([...flights].filter((flight)=>flight.launch_year!=='2020')))
    },[])


    return (
        <div className={'flights'}>
            {
                flights.map(flight=><Flight key={flight.mission_name} flight={flight}/>)
            }

        </div>
    );
};
