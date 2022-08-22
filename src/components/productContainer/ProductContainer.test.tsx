/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/require-top-level-describe */
/* eslint-disable jest/no-hooks */
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import ProductContainer from "./ProductContainer"
const server = setupServer(
  // Describe the requests to mock.
  rest.get('/productContainer/ProductContainer', (req, res, ctx) => {
    return res(
      ctx.json({
        ID: 'Lord of the Rings',
        Images: 'J. R. R. Tolkien',
        Name: "naruto",
        "Short Description": "a short desc",
        "Regular price": "34.99"
      }),
    )
  }),
)
beforeAll(() => {server.listen()})
afterEach((() => server.resetHandlers()))
afterAll(() => {server.close()})


// const productData = setupWorker(

// )
//finish testing buttons
//everything is async
const cartAdd = jest.fn()

describe("data loading" , () => {
  it("changes the value of the inputs of the login component", async () => {
    render( 
        <ProductContainer item={{}} addtocart={cartAdd} />
      )
      
      const productImage = await waitFor(() => screen.getByAltText(/person capturing an image/i))
      expect(productImage).toBeInTheDocument()
  })})
  


