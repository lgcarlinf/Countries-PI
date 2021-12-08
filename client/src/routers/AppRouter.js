import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Country } from '../components/Country/Country'
import { FormActivity } from '../components/FormActivity/FormActivity'
import { LandingPage } from '../components/LandingPage/LandingPage'
import { MainApp } from '../components/MainApp/MainApp'


export const AppRouter = () => {
    return (

            <Routes>
                    <Route path='/' element={<LandingPage/>}/>  
                    <Route path='/countries' element={<MainApp/>}/>
                    <Route path='/countries/:id'element={<Country/>}/>
                    <Route path='/countries/activity' element={<FormActivity/>}/>
            </Routes>

    )
}
