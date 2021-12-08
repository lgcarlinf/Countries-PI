import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import video from '../../assets/Time and Again   15 Countries In 4 Minutes 2014 Time Lapse online video cutter com.mp4'

export const LandingPage = () => {
    return (
        <div className="containerLanding">
            <video className ="video " autoPlay loop muted>
            <source src={video} type="video/mp4"/>
            </video>
            <h1>Countries PI</h1>
            <Link className="link" to='/countries'>Ingresa Aqui</Link>
        </div>
    )
}
