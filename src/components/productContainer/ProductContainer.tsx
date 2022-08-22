/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const ProductContainer = ({item, addtocart}) => {

  const baseProductImageURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL 
  return (
    <div key={item.ID} className='container mx-auto '>
              <div className='flex flex-wrap items-center  justify-center'>
                <div className='mx-2 mb-8 w-72 focus:outline-none xl:mb-0'>
                  <div className='shadow-lg focus:outline-none'>
                    <Link href={`/products/${item.ID}`} passHref>
                      <div>
                        <img
                        
                          alt='person capturing an image'
                          src={baseProductImageURL + (item.Images).toString()}
                          className='h-44 w-full focus:outline-none'
                        />
                      </div>
                    </Link>
                    <div className='bg-white dark:bg-gray-800'>
                      <div className='flex items-center justify-between px-4 pt-4'>
                        <div>
                          <img
                            className='focus:outline-none dark:bg-white'
                            src='https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg'
                            alt='bookmark'
                          />
                        </div>
                        <div className='rounded-full bg-yellow-200 py-1.5 px-6'>
                          <p className='text-xs text-yellow-700 focus:outline-none'>
                            Featured
                          </p>
                        </div>
                      </div>

                      <div className='p-4'>
                        <div className='flex items-center'>
                          <h2 className='h-14 text-lg font-semibold focus:outline-none dark:text-white'>
                            {item.Name}
                          </h2>
                          <p className='pl-5 text-xs text-gray-600 focus:outline-none dark:text-gray-200'></p>
                        </div>

                        <p className='mt-2 h-20 text-xs text-gray-600 focus:outline-none dark:text-gray-200'>
                          {item['Short description'] !== null
                            ? item['Short description']
                            : 'There is no dsecription htmlFor this item'}
                        </p>
                        <div className='mt-4 flex'>
                          <div>
                            <p className='bg-gray-200 px-2 py-1 text-xs text-gray-600 focus:outline-none dark:bg-gray-700 dark:text-gray-200'>
                              12 months warranty
                            </p>
                          </div>
                          <div className='pl-2'>
                            <p className='bg-gray-200 px-2 py-1 text-xs text-gray-600 focus:outline-none dark:bg-gray-700 dark:text-gray-200'>
                              Complete box
                            </p>
                          </div>
                        </div>
                        <div className='flex items-center justify-between py-4'>
                          <h2 className='text-xs font-semibold text-indigo-700 focus:outline-none'>
                            Bay Area, San Francisco
                          </h2>
                          <h3 className='text-xl font-semibold text-indigo-700 focus:outline-none'>
                            {item['Regular price'] !== null
                              ? item['Regular price']
                              : 'Unpriced'}
                          </h3>
                        </div>

                        <div>
                          <button
                            onClick={() => {
                              addtocart(item);
                            }}
                            className=''
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
  );
};

export default ProductContainer;