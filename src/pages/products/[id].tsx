/* eslint-disable @next/next/no-img-element */
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import IndividualStarUnderProductTitle from "../../components/ReviewComponents/IndividualStarUnderProductTitle"
import Modal from '../../components/ReviewComponents/Modal';
import Reviewfilter from '../../components/ReviewComponents/Reviewfilter';
import Reviews from '../../components/ReviewComponents/Reviews';
import { useGetReviewsQuery } from '../../services/reduxpractice';
import {ProductDataTypes} from "../../Types/ProductTypes"
import { supabase } from '../../utils/supabaseClient';

export async function getStaticPaths<GetStaticPaths>() {
  const { data, error } = await supabase
    .from(`Products`)
    .select()
    .not(`Images`, `eq`, null);

  const paths = data?.map((path) => {
    return {
      params: { id: path.ID.toString() },
    };
  });

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const { data, error } = await supabase.from(`Products`).select().eq(`ID`, id);

  return { 
    props: { products: data },
  };
};

//convert parts to components please to make it more readable
function Id({ products }: Partial<ProductDataTypes[]>) {
  console.log(products)
  const [rotate, setRotate] = useState(false);
  const [counter, setCounter] = useState(0);
  const [reviews, setReviews] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);
  const [reviewAvg, setReviewAvg] = useState(null);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userdata, setUserData] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchUser = async () => {
    const user = await supabase.auth.user();
    const session = await supabase.auth.session();
    user && setUser(user);
    // return user
  };

  const { data, error, isFetching } = useGetReviewsQuery(id);

  useEffect(() => {
    reviewAverage();
    fetchUser();
    fetchId();
  }, []);

  const reviewAverage = async () => {
    const arr: any[] = [];
    const { data, error, count } = await supabase
      .from('productReviews')
      .select('stars', { count: 'exact' })
      .eq('productID', id);

    data &&
      data.map((item) => {
        arr.push(item.stars);
      });

    const reducedData = reducerr(arr);
    if (reducedData !== null) {
      const avg = reducedData / count;
      setReviewAvg(avg);
    } else {
      null;
    }
  };

  //fetching reviews

  const reviewPosted = (date: string | number | Date | dayjs.Dayjs | null | undefined) => {
    dayjs.extend(relativeTime);
    return dayjs().from(date);
  };

  const fetchId = async () => {
    const { data, error } = await supabase.from('users').select('*');
    data && setUserData(data);
  };

  function reducerr(arr: any[]) {
    if (arr.length > 0) {
      return arr.reduce((prev: any, curr: any) => prev + curr);
    } else {
      return null;
    }
  }
  const product = products[0]

  const userdatainComments = (userdata: any[], userid: any) => {
    const filtered = userdata.filter((item: { userID: any; }) => item.userID === userid);
    return filtered;
  };

  //  const userdata = fetchId();

  const addCount = () => {
    setCounter((prev) => prev + 1);
  };

  const minusCount = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <div className='py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto '>
      <div className='flex flex-col items-center justify-center gap-8 lg:flex-row'>
        <div className='  w-full items-center sm:w-96 md:w-8/12 lg:w-6/12'>
          <p className=' text-base font-normal leading-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'>
            Products / {`${product.Name}`}
          </p>
          <h2 className='mt-4 text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9'>
            {product.Name}
          </h2>

          <div className=' mt-5 flex flex-row  justify-between'>
            <div className=' flex flex-row space-x-3'>
              <IndividualStarUnderProductTitle/>
              <IndividualStarUnderProductTitle/>
              <IndividualStarUnderProductTitle/>
              <IndividualStarUnderProductTitle/>
              <IndividualStarUnderProductTitle/>
            </div>
            <Link passHref href='#reviews'>
              <p className='cursor-pointer text-base font-normal leading-4 text-gray-700 duration-100 hover:text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'>
                {!isFetching && data.length} reviews
              </p>
            </Link>
          </div>

          <p className=' mt-7 text-base font-normal leading-6 text-gray-600'>
            {product['Short description']}
          </p>
          <p className=' mt-6 text-xl font-semibold leading-5 lg:text-2xl lg:leading-6 '>
            {product['Regular price']}
          </p>

          <div className='mt-10 lg:mt-11'>
            <div className='flex flex-row justify-between'>
              <p className=' text-base font-medium leading-4 text-gray-600'>
                Select quantity
              </p>
              <div className='flex'>
                <span
                  onClick={minusCount}
                  className='flex h-7 w-7 cursor-pointer items-center justify-center border border-r-0 border-gray-300 pb-1 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'
                >
                  -
                </span>
                <input
                  id='counter'
                  aria-label='input'
                  className='h-full w-14 border border-gray-300 pb-1 text-center'
                  type='text'
                  value={counter}
                  onChange={(e) => e.target.value}
                />
                <span
                  onClick={addCount}
                  className='flex h-7 w-7 cursor-pointer items-center justify-center border border-l-0 border-gray-300 pb-1 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 '
                >
                  +
                </span>
              </div>
            </div>
            <hr className=' my-2 w-full bg-gray-200' />
            <div className=' mt-4 flex flex-row items-center justify-between'>
              <p className='text-base font-medium leading-4 text-gray-600'>
                Size
              </p>
              <svg
                onClick={() => setRotate(!rotate)}
                id='rotateSVG'
                className={
                  'transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 ' +
                  (rotate ? 'rotate-180' : 'rotate-0')
                }
                width='10'
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 1L5 5L1 1'
                  stroke='#4B5563'
                  strokeWidth='1.25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <hr className=' mt-4 w-full bg-gray-200' />
          </div>

          <button className='mt-6 w-full bg-gray-800 py-5 text-base font-medium leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 lg:mt-12'>
            Add to shopping bag
          </button>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=' flex w-full flex-col  gap-4 sm:w-96 sm:gap-6 md:w-8/12 lg:w-6/12 lg:flex-row lg:gap-8'>
          <div className=' flex h-full w-full items-center justify-center bg-gray-100 lg:w-8/12'>
            {/* <img src={URL.createObjectURL(product.Images)} alt='Wooden Chair Preview' /> */}
            <img src="" alt='Wooden Chair Preview' />
          
          </div>
        </div>
      </div>
      <div className='mt-14 w-full'>
        <div className='mb-4  w-full px-2 md:mb-0'>
          <div className='flex w-full items-center justify-between'>
            <div>
              <h1 id='reviews' className='pb-6 text-7xl'>
                Reviews
              </h1>
            </div>
            {reviewAvg ? (
              <div>
                {' '}
                {/* review rating  */}
                <p className='font-heading font-medium '>
                  <span className={reviewAvg ? `text-7xl` : ``}>
                    {reviewAvg ? reviewAvg.toFixed(1) : 'loading'}
                  </span>
                  <span className='text-xl text-gray-300'>/5</span>
                </p>
                <div className='mb-3 flex'>
                  <a className='mr-1 inline-block' href='#'>
                    <svg
                      width='20'
                      height='20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z'
                        fill='#FFCB00'
                      ></path>
                    </svg>
                  </a>
                  <a className='mr-1 inline-block' href='#'>
                    <svg
                      width='20'
                      height='20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z'
                        fill='#FFCB00'
                      ></path>
                    </svg>
                  </a>
                  <a className='mr-1 inline-block' href='#'>
                    <svg
                      width='20'
                      height='20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z'
                        fill='#FFCB00'
                      ></path>
                    </svg>
                  </a>
                  <a className='mr-1 inline-block' href='#'>
                    <svg
                      width='20'
                      height='20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z'
                        fill='#FFCB00'
                      ></path>
                    </svg>
                  </a>
                  <a className='inline-block text-gray-200' href='#'>
                    <svg
                      width='20'
                      height='20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </a>
                </div>
                {!isFetching && (
                  <p className='text-sm font-medium text-gray-300'>
                    {data.length} reviews
                  </p>
                )}
              </div>
            ) : null}
          </div>
          <section className='bg-blueGray-100 rounded-t-10xl overflow-hidden pb-12 2xl:py-16'>
            <div>
              <div>
                <div className='mb-4 w-full px-2 xl:mb-0 xl:w-3/5'>
                  <div></div>
                </div>
              </div>
              <div className='flex justify-between '>
                {!isFetching && (
                  <a
                    className='font-heading text- mb-14 inline-block  rounded-2xl border-2 border-slate-500 p-4 text-3xl text-gray-500 shadow-lg'
                    href='#reviews'
                  >
                    {data.length} reviews
                  </a>
                )}

                <div className=''>
                  <button
                    type='button'
                    onClick={() => setShowModal(true)}
                    className='inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModalCenteredScrollable'
                  >
                    Write a review
                  </button>
                </div>
              </div>
              <div className='mb-5 mr-3 flex justify-end'>
                {!isFetching && data.length > 0 ? <Reviewfilter /> : null}
              </div>

              {showModal === true ? (
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  userId={user?.id}
                  email={user?.email}
                  productID={product.ID}
                />
              ) : null}
              {/* review component  */}
              <div className='reviews'></div>
              <Reviews
                reviewPosted={reviewPosted}
                data={data}
                userdata={userdata}
                userdatainComments={userdatainComments}
                isFetching={isFetching}
              />

              {!isFetching && (data?.length > 5 || null) ? (
                <div className='text-center'>
                  <button className='font-heading inline-block h-full w-full rounded-xl bg-blue-500 py-4 px-10 text-xl font-medium leading-8 tracking-tighter text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-auto'>
                    See all
                  </button>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Id;
