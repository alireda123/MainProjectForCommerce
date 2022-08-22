import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { AppProps } from "next/app";
import * as React from "react";
import { createContext, useEffect, useReducer, useState } from "react";

import "@/styles/globals.css";
import "@/styles/colors.css";

import { supabase } from "@/utils/supabaseClient";

import Layout from "../Layout/Layout";
import { api } from "../services/reduxpractice";
import {
  ProductDataTypes,
} from "../Types/ProductTypes";
import {
  SessionTypes,
} from "../Types/SessionTypes";

export const sessionDataContext = createContext<SessionTypes | object>({});
export const shoppingCartContext = createContext<SessionTypes | object>({});

interface ReducerTypes{
  type: string;
  payload: unknown;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [shoppingCart, setShoppingCart] = useState<Array<ProductDataTypes>>([]);
  const session = supabase.auth.user();

  useEffect(() => {
    setShoppingCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const shoppingCartReducer = (state: ProductDataTypes[], action: ReducerTypes) => {
    switch (action.type) {
      case "addToCart":
        setShoppingCart([...shoppingCart, action.payload as ProductDataTypes]);
        localStorage.setItem("cart", JSON.stringify(shoppingCart));
        return shoppingCart;
      case "removeFromCart":
        setShoppingCart(
          shoppingCart.filter((item) => item.ID !== action.payload)
        );
        localStorage.setItem("cart", JSON.stringify(shoppingCart));
        return shoppingCart;
      default:
        return state;
    }
  };
console.log(shoppingCart);
  const value = {
    shoppingCart,
    addItemToCart: (product: object) => {
      dispatch({ type: "addToCart", payload: product });
    },
    removeItemFromCart: (product: object) => {
      dispatch({ type: "removeFromCart", payload: product });
    },
  };

  const [state, dispatch] = useReducer(shoppingCartReducer, shoppingCart);

  
if (process.env.NODE_ENV === 'development') {
  // const { worker } = require('@/mocks/browser')
  // worker.start()
}

  return (

    <sessionDataContext.Provider value={session}>
      <shoppingCartContext.Provider value={value}>
        <ApiProvider api={api}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApiProvider>
      </shoppingCartContext.Provider>
    </sessionDataContext.Provider>
  );
}

export default MyApp;
