import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { createClient } from "@supabase/supabase-js";

import SideLogin from "../login";
import SideSignup from "../signup";
import { act } from "react-dom/test-utils";


let windowSpy;



//finish testing buttons
describe("Login Testing", () => {
    





  describe("Testing events ", () => {
    it("changes the value of the inputs of the login component", () => {
      render(<SideLogin />);
      const emailInput: HTMLInputElement = screen.getByPlaceholderText(
        /Email address/i
      );
      const passwordInput: HTMLInputElement = screen.getByPlaceholderText(
        /Password/i
      );

      fireEvent.change(emailInput, {
        target: { value: "socialstarservices1@gmail.com" },
      });
      fireEvent.change(passwordInput, { target: { value: "h1n1a1y1" } });
      expect(emailInput.value).toBe("socialstarservices1@gmail.com");
      expect(passwordInput.value).toBe("h1n1a1y1");
    });
    it("onchange function properly works", () => {
      render(<SideLogin />);
      const passwordInput: HTMLInputElement = screen.getByPlaceholderText(
        /Password/i
      );
      fireEvent.change(passwordInput, { target: { value: "hhghjgjhg" } });
      expect(passwordInput.value).toBe("hhghjgjhg");
    });
    it("length of password between 5 and 15", () => {
      render(<SideLogin />);
      const passwordInput: HTMLInputElement = screen.getByPlaceholderText(
        /Password/i
      );
      fireEvent.change(passwordInput, { target: { value: "hh353gjhg" } });
      expect(passwordInput.value).toMatch(/^[a-zA-Z-0-9]{5,15}$/);
    });
  });
   beforeEach(() => {
      windowSpy = jest.spyOn(window, "window", "get");
      });

      afterEach(() => {
        windowSpy.mockRestore();
      });

  describe("Login and forgot password buttons alongside validation", () => {
    
   

    //  render(<SideLogin />)
    //   const jestfunction = jest.fn()
 

    // const loginButton: HTMLButtonElement = screen.getByRole("button")
 
    // fireEvent.click(loginButton)
    
   
    // await waitFor(()=> expect(loginButton).toHaveBeenCalledTimes(1))


  });
});

