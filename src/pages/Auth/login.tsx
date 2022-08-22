/* eslint-disable @next/next/no-img-element */
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import CheckboxGroup from "../../components/LogComps/CheckboxGroup";


function SideLogin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [componentHasMounted, setComponentHasMounted] = useState(false);

  useEffect(() => {
    setComponentHasMounted(true)
  }, [])

  const supabase = createClient("https://guvncaiupfzhsnewuwmh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dm5jYWl1cGZ6aHNuZXd1d21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM0ODgzODcsImV4cCI6MTk2OTA2NDM4N30.tWOiZPOiI4GnaLWt19t7lZdWPgFquE6LNsMtzu9b4t8");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push("/");
    }
  };
  

  const session = supabase.auth.session();

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div className="flex min-w-full bg-gray-100">
      <div className="hidden h-full w-5/12 lg:block">
        <img
          src="https://images.unsplash.com/photo-1500672860114-9e913f298978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
          className="h-full w-full object-cover"
          alt="randomImage"
        />
      </div>
      <div className="relative w-full  py-24 lg:w-7/12">
        <a
          href="#"
          className="absolute top-0 right-0 mt-6 mr-8 cursor-pointer text-3xl text-blue-400"
        ></a>
        <form className="mx-auto w-5/6 text-center sm:w-1/2">
          <img
            src="https://gustui.s3.amazonaws.com/gustlogo.png"
            className="mx-auto block h-8"
            alt="gustuilogo"
          />
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800">Welcome back</h2>
            <p className="mt-3 text-gray-800">
              New to Gust?{" "}
              <Link href="/Auth/signup">
                Sign up
              </Link>
            </p>
          </div>
          <div className="mt-12 flex flex-col child:mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePassword}
            />

            <button onClick={handleLogin}>Log In</button>

            <div className="text-right">
              <a href="#" className="text-blue-400">
                Forgot your password?
              </a>
            </div>
            <div className="mt-4">
              <p className="text-left text-gray-800">Or login with</p>
              <div className="mt-2 grid grid-cols-3 gap-6 text-2xl text-black">
                <a
                  href="#"
                  className=" flex items-center justify-center rounded-sm border border-gray-600 py-3 hover:border-blue-400 hover:text-blue-400"
                ></a>
                <a
                  href="#"
                  className=" flex items-center justify-center rounded-sm border border-gray-600 py-3 hover:border-blue-400 hover:text-blue-400"
                ></a>
                <a
                  href="#"
                  className=" flex items-center justify-center rounded-sm border border-gray-600 py-3 hover:border-blue-400 hover:text-blue-400"
                ></a>
              </div>
            </div>
            <div className="mt-6 border-t border-b border-gray-300">
              <CheckboxGroup
                label="Remember this device"
                name="rememberMe"
                defaultChecked
              />
            </div>
            <p className="mt-6 text-left text-sm">
              By continuing you accept our{" "}
              <a href="#" className="text-blue-400">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SideLogin;
