import React, { useContext, useState } from 'react';

import ProductContainer from "@/components/productContainer/ProductContainer"
import Productfilter from '@/components/Productfilter';

import { useGetProductsQuery } from '@/services/reduxpractice';

import { shoppingCartContext } from '../_app';

const Products = () => {
  const [products, setProducts] = useState<any>(null);
  const [cart, setCart] = useState([]);

  const { data, error, isLoading, isSuccess, isFetching } = useGetProductsQuery();

  const { shoppingCart, addItemToCart, removeItemFromCart } =
    useContext(shoppingCartContext);

  const addtocart = (product) => {
    addItemToCart(product);
  };

  return (
    <div className='grid grid-cols-12'>
      <Productfilter />
      {isLoading === true && <p>loading values</p>}
      <div className=' col-span-9 grid min-h-full min-w-full  grid-cols-3 gap-20'>
        {!isFetching &&
          data.map((item) => (
            <ProductContainer item={item} key={item.id} addtocart={addtocart}/>
          ))}
      </div>
    </div>
  );
};

export default Products;
