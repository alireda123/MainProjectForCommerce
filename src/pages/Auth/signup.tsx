import { createClient } from '@supabase/supabase-js';
import Link from 'next/Link';
import React, { useEffect, useState } from 'react';

import CheckboxGroup from '../../components/LogComps/CheckboxGroup';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function SideSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurName] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    null;
  }, []);

  const signuptoAuthTable = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return user;
  };

  const signup = async (e) => {
    e.preventDefault();
    const user = await signuptoAuthTable();
    console.log(user);
    const userID = await user.id;
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          Firstname: firstName,
          Surname: surname,
          email,
          username,
          gender,
          userID,
        },
      ]);
    console.log(error, data);
  };

  return (
    <div className='flex min-w-full bg-gray-100'>
      <div className='hidden h-full w-5/12 lg:block'>
        <img
          src='https://images.unsplash.com/photo-1500672860114-9e913f298978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='relative w-full  py-24 lg:w-7/12'>
        <a
          href='#'
          className='absolute top-0 right-0 mt-6 mr-8 cursor-pointer text-3xl text-blue-400'
        ></a>
        <form className='mx-auto w-5/6 text-center sm:w-1/2'>
          <img
            src='https://gustui.s3.amazonaws.com/gustlogo.png'
            className='mx-auto block h-8'
          />
          <div className='mt-10'>
            <h2 className='text-3xl font-bold text-gray-800'>
              Create a new account
            </h2>
            <p className='mt-3 text-gray-800'>
              Already have an account?{' '}
              <Link href='/Auth/login' className='text-blue-400'>
                Login
              </Link>
            </p>
          </div>
          <div className=' mt-12 flex flex-col child:my-3'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <input
              type='text'
              name='firstname'
              placeholder='Firstname'
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              type='text'
              name='surname'
              placeholder='Surname'
              onChange={(e) => {
                setSurName(e.target.value);
              }}
            />

            <input
              type='email'
              name='emai'
              placeholder='Email address'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className='flex child:m-4  '>
              <button
                className='rounded-lg border-blue-400 p-2 focus:border-2'
                onClick={(e) => {
                  e.preventDefault();
                  setGender('Male');
                }}
              >
                Male
              </button>
              <button
                className='rounded-lg border-blue-400 p-2 focus:border-2'
                onClick={(e) => {
                  e.preventDefault();
                  setGender('Female');
                }}
              >
                Female
              </button>
            </div>

            <button className='max-w-fit rounded-lg border-2' onClick={signup}>
              Sign Up
            </button>
          </div>

          <div className='mt-4'>
            <p className='text-left text-gray-800'>Or login with</p>
            <div className='mt-2 grid grid-cols-3 gap-6 text-2xl text-black'>
              <a
                href='#'
                className='block flex items-center justify-center rounded-sm border border-gray-600 py-3 hover:border-blue-400 hover:text-blue-400'
              ></a>
              <a
                href='#'
                className='block flex items-center justify-center rounded-sm border border-gray-600 py-3 hover:border-blue-400 hover:text-blue-400'
              ></a>
              <a
                href='#'
                className='block flex items-center justify-center rounded-sm border border-gray-600 py-3 hover:border-blue-400 hover:text-blue-400'
              ></a>
            </div>
          </div>
          <div className='mt-6 border-t border-b border-gray-300'>
            <CheckboxGroup
              label='Remember this device'
              name='rememberMe'
              defaultChecked
            />
          </div>
          <p className='mt-6 text-left text-sm'>
            By continuing you accept our{' '}
            <a href='#' className='text-blue-400'>
              Terms of Use
            </a>{' '}
            and{' '}
            <a href='#' className='text-blue-400'>
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default SideSignUp;
