import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNameCountries } from '../../actions'
import './Searchbar.css'

export const Searchbar = () => {
    const dispatch = useDispatch()
    const [name,setName]= useState('')

    const handleInputChange = (e)=>{
        e.preventDefault()
        setName(e.target.value)
    
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(getNameCountries(name))
        setName('')
    }

    return (
        <div className='Searchbar'>
            <input
             className='textSearch'
             type="text" 
             placeholder="Buscar..."
             onChange= {(e)=>handleInputChange(e)}
             value={name}
             />
             <button className='butonSearch' type="submit" onClick={(e)=>handleSubmit(e)}>Buscar</button>
        </div>
    )
}
