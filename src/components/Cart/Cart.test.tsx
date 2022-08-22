/* eslint-disable jest/prefer-lowercase-title */
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { shoppingCartContext } from '@/pages/_app';

import Cart from "./Cart"

  const value = {
    shoppingCart: [{ID:1, Images: "", Name: "productName", "Regular Price": "39.99"}]
    ,addItemToCart: jest.fn(),
    removeItemFromCart: jest.fn(),
  }

//finish testing buttons
describe("Login Testing", () => {
    BeforeEach(() => {
      render(
      <shoppingCartContext.Provider value={value}>
        <Cart />
      </shoppingCartContext.Provider>)
    })
    it("shopping Cart in document", () => {
      const cart = screen.getByRole("title");
      expect(cart).toBeInTheDocument();
    })
  
});
