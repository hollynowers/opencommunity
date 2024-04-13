import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function Register() {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [diet, setDiet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);
  return (
    <div>
      <div style={{ marginTop: "-700px" }}></div>
      <section className="bg-gray-50 dark:bg-gray-900" style={{ marginTop: 0 }}>
        <center>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Register
          </h1>
        </center>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  ></input>
                </div>

                <div>
                  <label
                    for="surname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Surname
                  </label>
                  <input
                    type="surname"
                    name="surname"
                    id="surame"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Surname"
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                    required
                  ></input>
                </div>

                <div>
                  <label
                    for="surname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    required
                  ></input>
                </div>

                <div>
                  <label
                    for="surname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Dietary Requirements
                  </label>
                  <textarea
                    type="text"
                    name="diet"
                    id="diet"
                    className="bg-gray-50 border h-20 resize-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Dietary Requirements"
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>

                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  ></input>
                </div>

                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    required
                  ></input>
                </div>

                <div className="flex items-center justify-between"></div>
                {error ? (
                  <>
                    <p className="text-red-500 text-center ">{error}</p>
                  </>
                ) : (
                  <></>
                )}
                <button
                  type="submit"
                  onClick={() => {}}
                  className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
