import React, { useState } from 'react';

import { useUpdateReviewsMutation } from '../../services/reduxpractice';
const EditModal = ({ showModal, setShowModal, editData, uniqueReviewId }) => {
  const [rating, setRating] = useState(editData.stars);
  const [editreviewText, setEditReviewText] = useState(editData.reviewText);
  const [userName, setUserName] = useState(editData.username);
  const [editpros, setEditPros] = useState<Array<string>>(editData.pros);
  const [editcons, setEditCons] = useState(editData.cons);
  const [editwouldRecommend, setWouldRecommend] = useState(
    editData.wouldRecommend
  );
  const [tempPro, setTempPro] = useState('');
  const [tempProArr, setTempProArr] = useState([]);
  const [tempCon, setTempCon] = useState('');
  const [tempConArr, setTempConArr] = useState([]);

  const [updateReview, result] = useUpdateReviewsMutation();

  const updateMyReview = async (e) => {
    console.log(
      editData.productID,
      editData.reviewText,
      { userID: editData.userID },
      { stars: rating },
      editpros,
      editcons,
      editwouldRecommend,
      editData.email,
      uniqueReviewId
    );

    updateReview({
      productID: editData.productID,
      reviewText: editreviewText,
      userID: editData.userID,
      stars: rating,
      pros: editpros,
      cons: editcons,
      wouldRecommend: editwouldRecommend,
      email: editData.email,
      uniqueReviewId: uniqueReviewId,
    });

    setShowModal(false);
    setRating(0);
    setEditReviewText(null);
    setUserName(null);
    setEditPros([]);
    setEditCons([]);
    setWouldRecommend(false);
    setDataNull();

    console.log(result);
  };

  const updateReviews = (reviewid) => {
    //updateReview({})
    return null;
  };

  const setDataNull = () => {
    editData = null;
  };

  // Review Modal states

  return (
    <>
      {editData && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
          <div className='min-w-auto relative my-6 w-auto'>
            <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
              <div className='flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 '>
                <h3 className='font=semibold text-3xl'>Your review</h3>
                <button
                  className='float-right border-0 bg-transparent text-black'
                  onClick={() => {
                    setShowModal(false);
                    setDataNull();
                  }}
                >
                  <span className='opacity-7 block h-6 w-6 rounded-full bg-gray-400 py-0 text-xl text-black'>
                    x
                  </span>
                </button>
              </div>
              <div className='relative flex-auto p-6 '>
                <form className='w-full rounded bg-gray-200 px-12 py-12 shadow-md'>
                  <div className=' child:mr-12 child:mb-5 child:text-lg '>
                    <label className='mb-1 block text-sm font-bold text-black'>
                      Your Rating
                    </label>
                    <input
                      onChange={(e) => setRating(e.target.value)}
                      className='-p-4'
                      type='range'
                      id='vol'
                      name='vol'
                      defaultValue='0'
                      min='0'
                      max='5'
                    />
                    {rating} stars
                    <label className='mb-1 block text-sm font-bold text-black'>
                      Your review
                    </label>
                    <textarea
                      onChange={(e) => setEditReviewText(e.target.value)}
                      required
                      className='w-full appearance-none rounded border py-2 px-1 text-black shadow'
                      defaultValue={editreviewText}
                    />
                    <label className='mb-1 block text-sm font-bold text-black'>
                      Pros
                    </label>
                    <div className='flex items-center'>
                      <input
                        onChange={(e) => setTempPro(e.target.value)}
                        className='w-full appearance-none rounded border py-2 px-1 text-black shadow'
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (
                            editpros.length < 3 &&
                            tempProArr.length < 3 &&
                            tempPro !== ''
                          ) {
                            tempProArr.push(tempPro);
                            setEditPros(tempProArr);
                            setTempPro('');
                          } else {
                            null;
                          }
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='25'
                          height='25'
                          className='ml-3'
                          viewBox='0 0 448 512'
                        >
                          <path d='M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z' />
                        </svg>
                      </button>
                    </div>
                    {editpros &&
                      editpros.map((item) => (
                        <div
                          key={Math.floor(Math.random() * 1000)}
                          className='flex items-center justify-between'
                        >
                          <div className='flex '>
                            <svg
                              className='mr-3'
                              xmlns='http://www.w3.org/2000/svg'
                              width='25'
                              height='25'
                              viewBox='0 0 512 512'
                            >
                              <path d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z' />
                            </svg>
                            <p>{item}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setEditPros(
                                editpros.filter(
                                  (filterItem) => filterItem !== item
                                )
                              );
                              setTempProArr(
                                tempProArr.filter(
                                  (filterItem) => filterItem !== item
                                )
                              );
                            }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='25'
                              height='25'
                              viewBox='0 0 576 512'
                            >
                              <path d='M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z' />
                            </svg>
                          </button>
                        </div>
                      ))}
                    <label className='mb-1 block text-sm font-bold text-black'>
                      Cons
                    </label>
                    <div className='flex items-center'>
                      <input
                        onChange={(e) => setTempCon(e.target.value)}
                        className='w-full appearance-none rounded border py-2 px-1 text-black shadow'
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (
                            editcons.length < 3 &&
                            tempConArr.length < 3 &&
                            tempCon !== ''
                          ) {
                            tempConArr.push(tempCon);
                            setEditCons(tempConArr);
                            setTempCon('');
                          } else {
                            null;
                          }
                        }}
                        className=''
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='ml-3'
                          width='25'
                          height='25'
                          viewBox='0 0 448 512'
                        >
                          <path d='M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z' />
                        </svg>
                      </button>
                    </div>
                    {editcons &&
                      editcons.map((item) => (
                        <div
                          key={Math.floor(Math.random() * 1000)}
                          className='flex items-center justify-between'
                        >
                          <div className='flex'>
                            <svg
                              className='mr-3'
                              xmlns='http://www.w3.org/2000/svg'
                              width='25'
                              height='25'
                              viewBox='0 0 512 512'
                            >
                              <path d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z' />
                            </svg>
                            <p>{item}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setEditCons(
                                editcons.filter(
                                  (filterItem) => filterItem !== item
                                )
                              );
                              setTempConArr(
                                tempConArr.filter(
                                  (filterItem) => filterItem !== item
                                )
                              );
                            }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='25'
                              height='25'
                              viewBox='0 0 576 512'
                            >
                              <path d='M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z' />
                            </svg>
                          </button>
                        </div>
                      ))}
                    <label className='mb-1  block text-sm font-bold text-black'>
                      Would recommend?
                    </label>
                    <input
                      onChange={(e) => setWouldRecommend(e.target.value)}
                      type='checkbox'
                      className='rounded border shadow '
                      defaultValue={editwouldRecommend}
                    />
                  </div>
                </form>
              </div>
              <div className='border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6'>
                <button
                  className='background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none'
                  type='button'
                  onClick={() => {
                    setDataNull();
                    setShowModal(false);
                  }}
                >
                  Close
                </button>
                <button
                  className='mr-1 mb-1 rounded bg-yellow-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-yellow-700'
                  type='button'
                  onClick={updateMyReview}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
