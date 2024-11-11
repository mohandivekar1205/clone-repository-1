import React, { useState } from 'react'

import { assets } from '../assets/assets'


function RegistrationPage() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    // Arrays for days, months, and years for DOB dropdowns
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); // Last 100 years

    const [formVisibility, setForlvisibilty] = useState(true);

    const visibilty = () => {
        setForlvisibilty(false);
    }



    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-[#121212] p-8 rounded-lg shadow-lg w-96">

                {formVisibility ? (<form>

                    <div className='flex justify-center'>
                        <img src={assets.spotify_logo} className='w-12' />
                    </div>

                    <h2 className="text-4xl font-bold text-center mb-4 text-white">Sign up to start listening</h2>


                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>

                    {/* Gender Dropdown */}
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="gender">
                            Gender
                        </label>
                        <select
                            id="gender"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* DOB Dropdowns for Day, Month, Year */}
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="dob">
                            Date of Birth
                        </label>
                        <div className="flex space-x-2">
                            <select
                                id="day"
                                className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            >
                                <option value="">Day</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>

                            <select
                                id="month"
                                className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            >
                                <option value="">Month</option>
                                {months.map((month, index) => (
                                    <option key={index} value={index + 1}>
                                        {month}
                                    </option>
                                ))}
                            </select>

                            <select
                                id="year"
                                className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            >
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Country Dropdown */}
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <select
                            id="country"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        >
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="uk">UK</option>
                            <option value="india">India</option>
                            <option value="germany">Germany</option>
                        </select>
                    </div>

                    {/* Submit Button */}

                    <div className='flex justify-end'>

                        <button
                            onClick={visibilty}
                            className="w-[40%] bg-[#1ED760] text-white font-bold py-2 px-4 rounded-full transition duration-300">
                            Next
                        </button>
                    </div>
                </form>


                ) : (


                    <form>
                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            />
                        </div>

                        <div className="mb-6 relative">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 mt-6 right-3 flex items-center text-black"
                            >
                                {passwordVisible ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6 relative">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute inset-y-0 mt-6 right-3 flex items-center text-black"
                            >
                                {confirmPasswordVisible ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className="w-full bg-[#1ED760] text-white font-bold py-2 px-4 rounded-full transition duration-300">
                            Register
                        </button>
                    </form>)}
            </div>
        </div>
    )
}

export default RegistrationPage