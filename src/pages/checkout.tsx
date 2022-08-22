import React from 'react';

const checkout = () => {
  return (
    <section className='bg-blueGray-100 overflow-hidden pt-12 pb-24'>
      <div className='container mx-auto px-4'>
        <ul className='mb-10 flex flex-wrap items-center xl:mb-0'>
          <li className='mr-6'>
            <a
              className='flex items-center text-sm font-medium text-gray-400 hover:text-gray-500'
              href='#'
            >
              <span>Home</span>
              <svg
                className='ml-6'
                width='4'
                height='7'
                viewBox='0 0 4 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z'
                  fill='currentColor'
                ></path>
              </svg>
            </a>
          </li>
          <li className='mr-6'>
            <a
              className='flex items-center text-sm font-medium text-gray-400 hover:text-gray-500'
              href='#'
            >
              <span>Store</span>
              <svg
                className='ml-6'
                width='4'
                height='7'
                viewBox='0 0 4 7'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z'
                  fill='currentColor'
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              className='text-sm font-medium text-indigo-500 hover:text-indigo-600'
              href='#'
            >
              Your cart
            </a>
          </li>
        </ul>
        <div className='mb-7 border-b border-black border-opacity-5 pb-9 text-center'>
          <h2 className='xl:text-10xl font-heading text-center text-5xl font-medium leading-normal'>
            Billing address
          </h2>
        </div>
        <div className='-mx-4 mb-14 flex flex-wrap xl:mb-24'>
          <div className='mb-14 w-full px-4 md:mb-0 md:w-8/12 lg:w-3/4'>
            <div className='rounded-3xl bg-white py-20 px-8 md:px-16'>
              <div className='mb-14 border-b border-gray-200 border-opacity-30 pb-16'>
                <div className='mx-auto max-w-lg'>
                  <div className='mb-6 flex flex-wrap items-center'>
                    <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                      <label className='text-darkBlueGray-400 text-lg'>
                        Your name:
                      </label>
                    </div>
                    <div className='w-full md:w-2/3'>
                      <input
                        className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='mb-6 flex flex-wrap items-center'>
                    <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                      <label className='text-darkBlueGray-400 text-lg'>
                        Username:
                      </label>
                    </div>
                    <div className='w-full md:w-2/3'>
                      <input
                        className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='mb-6 flex flex-wrap items-center'>
                    <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                      <label className='text-darkBlueGray-400 text-lg'>
                        Address 1:
                      </label>
                    </div>
                    <div className='w-full md:w-2/3'>
                      <input
                        className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='flex flex-wrap items-center'>
                    <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                      <label className='text-darkBlueGray-400 text-lg'>
                        Address 2:
                      </label>
                    </div>
                    <div className='w-full md:w-2/3'>
                      <input
                        className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        type='text'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-14 border-b border-gray-200 border-opacity-30 pb-16'>
                <div className='mx-auto mb-16 max-w-lg'>
                  <div className='mb-6 flex flex-wrap items-center'>
                    <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                      <label className='text-darkBlueGray-400 text-lg'>
                        Country:
                      </label>
                    </div>
                    <div className='w-full md:w-2/3'>
                      <input
                        className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='mb-6 flex flex-wrap items-center'>
                    <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                      <label className='text-darkBlueGray-400 text-lg'>
                        State:
                      </label>
                    </div>
                    <div className='w-full md:w-2/3'>
                      <input
                        className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='mb-6 flex flex-wrap items-center'>
                    <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                      <label className='text-darkBlueGray-400 text-lg'>
                        Zip code:
                      </label>
                    </div>
                    <div className='w-full md:w-1/3'>
                      <input
                        className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                        type='text'
                      />
                    </div>
                  </div>
                </div>
                <div className='md:ml-16'>
                  <label className='relative mb-8 flex items-center'>
                    <input
                      className='relative ml-10 appearance-none'
                      type='checkbox'
                    />
                    <button className='absolute top-1/2 left-0 h-6 w-6 -translate-y-1/2 transform'>
                      <svg
                        width='27'
                        height='27'
                        viewBox='0 0 27 27'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          width='27'
                          height='27'
                          rx='8'
                          fill='#28E172'
                        ></rect>
                        <path
                          d='M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z'
                          fill='white'
                        ></path>
                      </svg>
                    </button>
                    <span className='ml-2 text-sm text-gray-400'>
                      Shipping address is the same as my billing address
                    </span>
                  </label>
                  <label className='relative flex items-center'>
                    <input
                      className='relative ml-10 appearance-none'
                      type='checkbox'
                    />
                    <button className='absolute top-1/2 left-0 h-6 w-6 -translate-y-1/2 transform'>
                      <svg
                        width='27'
                        height='27'
                        viewBox='0 0 27 27'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          y='0.5'
                          width='26'
                          height='26'
                          rx='7.5'
                          stroke='#348BF6'
                        ></rect>
                      </svg>
                    </button>
                    <span className='ml-2 text-sm text-gray-400'>
                      Save this information for next time
                    </span>
                  </label>
                </div>
              </div>
              <div className='mb-16 md:ml-16'>
                <label className='relative mb-5 mr-16 inline-flex items-center'>
                  <input
                    className='relative ml-10 appearance-none'
                    type='checkbox'
                  />
                  <button className='absolute top-1/2 left-0 h-6 w-6 -translate-y-1/2 transform'>
                    <svg
                      width='27'
                      height='27'
                      viewBox='0 0 27 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect width='27' height='27' rx='8' fill='#28E172'></rect>
                      <path
                        d='M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z'
                        fill='white'
                      ></path>
                    </svg>
                  </button>
                  <span className='ml-2 text-sm leading-3 text-gray-400'>
                    Credit card
                  </span>
                </label>
                <label className='relative mb-5 mr-16 inline-flex items-center'>
                  <input
                    className='relative ml-10 appearance-none'
                    type='checkbox'
                  />
                  <button className='absolute top-1/2 left-0 h-6 w-6 -translate-y-1/2 transform'>
                    <svg
                      width='27'
                      height='27'
                      viewBox='0 0 27 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='26'
                        height='26'
                        rx='7.5'
                        stroke='#348BF6'
                      ></rect>
                    </svg>
                  </button>
                  <span className='ml-2 text-sm leading-3 text-gray-400'>
                    Debit card
                  </span>
                </label>
                <label className='relative mb-5 inline-flex items-center'>
                  <input
                    className='relative ml-10 appearance-none'
                    type='checkbox'
                  />
                  <button className='absolute top-1/2 left-0 h-6 w-6 -translate-y-1/2 transform'>
                    <svg
                      width='27'
                      height='27'
                      viewBox='0 0 27 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        x='0.5'
                        y='0.5'
                        width='26'
                        height='26'
                        rx='7.5'
                        stroke='#348BF6'
                      ></rect>
                    </svg>
                  </button>
                  <span className='ml-2 text-sm leading-3 text-gray-400'>
                    PayPal
                  </span>
                </label>
              </div>
              <div className='mx-auto max-w-lg'>
                <div className='mb-6 flex flex-wrap items-center'>
                  <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                    <label className='text-darkBlueGray-400 text-lg'>
                      Name on card:
                    </label>
                  </div>
                  <div className='w-full md:w-2/3'>
                    <input
                      className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                      type='text'
                    />
                  </div>
                </div>
                <div className='mb-6 flex flex-wrap items-center'>
                  <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                    <label className='text-darkBlueGray-400 text-lg'>
                      Credit card number:
                    </label>
                  </div>
                  <div className='w-full md:w-2/3'>
                    <input
                      className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                      type='text'
                    />
                  </div>
                </div>
                <div className='mb-6 flex flex-wrap items-center'>
                  <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                    <label className='text-darkBlueGray-400 text-lg'>
                      Expiration:
                    </label>
                  </div>
                  <div className='w-full md:w-2/3'>
                    <input
                      className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                      type='text'
                    />
                  </div>
                </div>
                <div className='flex flex-wrap items-center'>
                  <div className='mb-2 w-full md:mb-0 md:w-1/3 md:pr-10 md:text-right'>
                    <label className='text-darkBlueGray-400 text-lg'>
                      CVV:
                    </label>
                  </div>
                  <div className='w-full md:w-1/3'>
                    <input
                      className='w-full rounded-xl border-2 border-blue-400 bg-blue-50 px-5 py-3 text-lg leading-9 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                      type='text'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-4/12 lg:w-1/4'>
            <div>
              <h2 className='font-heading mb-7 text-3xl font-medium lg:mt-6'>
                Order summary
              </h2>
              <div className='font-heading mb-3 flex items-center justify-between rounded-3xl bg-white bg-opacity-50 py-4 px-10 font-medium leading-8'>
                <span>Subtotal</span>
                <span className='flex items-center text-xl'>
                  <span className='mr-2 text-base'>$</span>
                  <span>710,70</span>
                </span>
              </div>
              <div className='font-heading mb-3 flex items-center justify-between rounded-3xl bg-white bg-opacity-50 py-4 px-10 font-medium leading-8'>
                <span>Shipping</span>
                <span className='flex items-center text-xl'>
                  <span className='mr-2 text-base'>$</span>
                  <span>10,00</span>
                </span>
              </div>
              <div className='font-heading mb-14 flex items-center justify-between rounded-3xl bg-white py-4 px-10 font-medium leading-8'>
                <span>Total</span>
                <span className='flex items-center text-xl text-blue-500'>
                  <span className='mr-2 text-base'>$</span>
                  <span>720,70</span>
                </span>
              </div>
              <h4 className='font-heading mb-4 text-3xl font-medium'>
                Discount code
              </h4>
              <label className='text-darkBlueGray-400 mb-3 block text-lg'>
                Apply code:
              </label>
              <div className='relative mb-3 lg:mb-10'>
                <input
                  className='w-full flex-grow rounded-3xl border-2 border-blue-500 bg-white px-5 py-4 pr-36 leading-7 outline-none'
                  type='text'
                />
                <a
                  className='font-heading absolute top-1/2 right-1 w-auto -translate-y-1/2 -translate-x-px transform rounded-xl bg-blue-500 py-3 px-8 text-center text-lg font-medium leading-7 tracking-tighter text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 xl:w-auto'
                  href='#'
                >
                  Apply
                </a>
              </div>
              <a
                className='font-heading inline-block w-full rounded-xl bg-blue-500 py-5 px-10 text-center text-lg font-medium leading-6 tracking-tighter text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 lg:py-3 lg:leading-7'
                href='#'
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
        <div className='md:w-96'>
          <a
            className='font-heading block w-full rounded-xl bg-white py-5 px-10 text-center text-xl font-medium leading-6 tracking-tighter hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            href='#'
          >
            Back to shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default checkout;
