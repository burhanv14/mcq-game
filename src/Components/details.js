import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Details =  () => {
const navigate = useNavigate();

const [form,setForm] = useState({});

const handleForm = (e) =>{
  console.log(e.target.value)
  setForm({
    [e.target.name] : e.target.value
  })
}

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
  const response =  await fetch('http://localhost:3000/',{
    method : 'POST',
    body : JSON.stringify(form),
    headers :{
      'Content-Type' : 'application/json'
    }
    });
    const data = await response.json();
    console.log(data);
  }
  catch(error){
    console.error('A problem with fetching the API')
  }
 
}
  return (
    <div class="h-full w-full flex flex-col justify-center bg-zinc-700">
      <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
        <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <div class="flex pb-3">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
          <input name="username" onChange={handleForm} type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name Here"/>
        </div>
        <button onClick={() => navigate('quiz')} type="button" class=" text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Start Quiz!</button>
      </form> 
    </div>
  )
}
