import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';

import { shoppingCartContext } from '@/pages/_app';

import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Cart from '../components/Cart/Cart';

const Layout = ({ children }) => {
  const [revealSidebar, setRevealSidebar] = useState(false);
  const [open, setOpen] = useState(false);

  const { shoppingCart, addItemToCart, removeItemFromCart } =
    useContext(shoppingCartContext);

  const variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        type: 'tween',
      },
      marginLeft: 320,
    },
    closed: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        type: 'tween',
      },
      marginLeft: 56,
    },
  };

  return (
    <>
      <Sidebar
        revealSidebar={revealSidebar}
        setRevealSidebar={setRevealSidebar}
      />
      <Cart
        open={open}
        setOpen={setOpen}
        shoppingCart={shoppingCart}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
      <motion.div
        initial={{ marginLeft: 56 }}
        variants={variants}
        className={revealSidebar === true ? ` h-full` : ` h-full`}
        animate={revealSidebar ? 'open' : 'closed'}
      >
        <Navbar openCart={open} setOpenCart={setOpen} />
        <main className='mx-20 mt-20 mb-4'>{children}</main>
        <div className=''>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Layout;
