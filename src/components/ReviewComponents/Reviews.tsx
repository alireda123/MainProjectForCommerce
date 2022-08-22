/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { useDeleteReviewsMutation } from '@/services/reduxpractice';

import EditModal from './EditModal';
import Stars from '../Stars';
import {getReviews} from "../../Types/ReviewTypes"


const Reviews = ({
  isFetching,
  data,
  userdatainComments,
  userdata,
  reviewPosted,
}) => {
  const [deleteReview, updatedDeletion] = useDeleteReviewsMutation();
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [uniqueReviewId, setUniqueReviewId] = useState(null);
  const [user, setUser] = useState(null);

  const conserveEditData = (id: (number | null)) => {
    const filteredData = data.filter((item) => item.id === id);
    setEditData(filteredData[0]);
    setUniqueReviewId(id);
  };

  return (
    <>
      {showModal ? (
        <EditModal
          showModal={showModal}
          setShowModal={setShowModal}
          editData={editData}
          uniqueReviewId={uniqueReviewId}
        />
      ) : null}
      {!isFetching &&
        data.map((item : Partial<getReviews>) => (
          <div
            key={item.id}
            className='mb-10 overflow-hidden rounded-t-3xl rounded-b-3xl border-2 shadow-lg'
          >
            <div className='p-4 px-8'>
              <div className='bg-white bg-opacity-40  pt-3 pb-3 md:pb-1'>
                <div className='flex  items-start'>
                  {userdata ? (
                    <>
                      <img
                        className='mr-6'
                        src={(function call() {
                          let j;
                          j = userdatainComments(userdata, item.userID)[0];
                          if (j) {
                            return j.pfp;
                          }
                        })()}
                        alt='user image'
                      />
                      <h4 className='font-heading w-full text-xl font-medium md:w-auto'>
                        {(function call() {
                          let j;
                          j = userdatainComments(userdata, item.userID)[0];
                          if (j) {
                            return j.username;
                          }
                        })()}
                      </h4>{' '}
                    </>
                  ) : (
                    <>
                      {' '}
                      <img src='' alt="" /> <h4>nothing</h4>
                    </>
                  )}

                  <div className='mx-8 h-2 w-full bg-transparent md:h-8 md:w-px md:bg-gray-200'></div>
                  <span className='font-heading mr-4 text-xl font-medium'>
                    {item.stars}
                  </span>
                  <Stars numberofStars={item.stars} />
                  <div className='w-full'>
                    <p className='text-right'>
                      {item.wouldRecommend
                        ? 'Would Recommend'
                        : 'Would not Recommend'}
                    </p>
                  </div>
                </div>
              </div>

              <div className='overflow-hidden bg-white pt-8 pb-12'>
                <div className='flex flex-wrap'>
                  <div className='mb-6 w-full md:mb-0 md:w-2/3'>
                    <p className='text-darkBlueGray-400 mb-8 max-w-2xl leading-loose'>
                      {item.reviewText}
                    </p>
                    <div className='-mb-2 block'>
                      <div className='mb-2 inline-flex w-full md:mr-2 md:w-auto '>
                        {item.pros.map((item: string) => (
                          <div
                            key={Math.floor(Math.random() * 1000)}
                            className='mr-2 flex h-12 items-center rounded-full border-2 border-green-500 bg-green-100 pl-2 pr-6'
                          >
                            <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-500'>
                              <svg
                                width='11'
                                height='11'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z'
                                  fill='currentColor'
                                ></path>
                              </svg>
                            </div>
                            <span className='font-heading font-medium text-green-500'>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className='mb-2 inline-flex w-full md:mr-2 md:w-auto'>
                        {item.cons.map((item: string) => (
                          <div
                            key={Math.floor(Math.random() * 1000)}
                            className='mr-2 flex h-12 items-center rounded-full border-2 border-red-500 bg-red-100 pl-2 pr-6'
                          >
                            <div className='red-green-500 mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='11'
                                height='11'
                                fill='red'
                                viewBox='0 0 448 512'
                              >
                                <path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
                              </svg>
                            </div>
                            <span className='font-heading font-medium text-red-500'>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full justify-end   md:w-1/3 '>
                    <button
                      onClick={() => {
                        conserveEditData(item.id);
                        setShowModal(true);
                      }}
                      className='mr-3 '
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 512 512'
                      >
                        <path d='M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z' />
                      </svg>
                    </button>
                    <button className='' onClick={() => deleteReview(item.id)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 448 512'
                      >
                        <path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <p className='mb-2 text-right text-sm text-gray-300'>
                Added {reviewPosted(item.created_at)}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Reviews;
