//This is a continuation of the register page, where users enter their account details

'use client'
import {useState} from 'react'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

const RegiserAccountDetails = () => {

  //Constants for the Form
  const [dietaryRequirement, setDietaryRequirement] = useState(''); 
  const [allergies, setAllergies] = useState('');
  const [injury, setInjury] = useState('');

  //Account details logic
  const handleAccountDetails = () => {
    console.log("The Account details form has been submitted")
    //This function will deal with sending the account details information to be stored in FireStore
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="autotext-6xl font-bold text-gray-800">ACCOUNT DETAILS</h1>
        <form onSubmit={handleAccountDetails} className="max-w-md px-8 py-6 bg-gray-100 rounded-lg shadow-md">
          {/* Dietary Requirement */}
          <div className="mb-4">
            <label htmlFor="dietaryRequirement" className="block mb-2 text-sm font-medium text-gray-700">Dietary Requirements</label>
            <select
              id="dietaryRequirement"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={dietaryRequirement}
              onChange={(e) => setDietaryRequirement(e.target.value)}
              required
            >
              <option value="">Select one</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Normal">Normal</option>
              <option value="Halaal">Halaal</option>
            </select>
          </div>
          
           {/* Allergies */}
          <div className="mb-4">
            <label htmlFor="allergies" className="block mb-2 text-sm font-medium text-gray-700">Allergies</label>
            <input
              type="text"
              id="allergies"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>
           {/* Injury or illness */}
          <div className="mb-4">
            <label htmlFor="injury" className="block mb-2 text-sm font-medium text-gray-700">Injury</label>
            <input
              type="text"
              id="injury"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={injury}
              onChange={(e) => setInjury(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Complete Registration</button>
        </form>

    </div>

  )
}

export default RegiserAccountDetails