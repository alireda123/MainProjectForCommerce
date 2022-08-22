import React, { ChangeEvent, SyntheticEvent, useEffect } from "react";
import { useState } from "react";

import { useUploadProductMutation } from "@/services/reduxpractice";

import { uploadProduct } from "../Types/ProductTypes";
import { supabase } from "../utils/supabaseClient";

const UploadProduct = () => {
  const user = supabase.auth.user();

  const submitProduct = (e) => {
    e.preventDefault();

    Object.entries(uploadProductData).forEach((item) => {
      validatorCheck(item[1], item[0]);
    });
    validatorCheck(e.target.value, e.target.name);

    uploadProductDataToDatabase({ ...uploadProductData });
  };
  const countries: Array<string> = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  const [uploadProductData, setuploadProductData] = useState<uploadProduct>({
    SellerID: "",
    SellerEmail: "",
    Images: null,
    Name: "",
    ShortDesc: "",
    Description: "",
    country: "",
    price: "",
    website: "",
    stock: "",
    extrainformation: "",
    salePrice: "",
    isOnSale: false,
  });

  type eventHandler = ChangeEvent<HTMLInputElement>;

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setuploadProductData({
      ...uploadProductData,
      [e.target.name]: e.target.value,
    });
  };

  function n(img){
    let x = new Image(img)
  }
  

  useEffect(() => {
    user &&
      setuploadProductData({
        ...uploadProductData,
        SellerID: user.id,
        SellerEmail: user.email,
      });
  }, []);

  //upload sellerID and sellerEmail

  const [image, setImage] = useState(null);

  const handleImages = async (e: SyntheticEvent) => {
    e.preventDefault();
    let productImage = "";
    let datareturned = null;
    if (image) {

      try {
        const { data, error } = await supabase.storage
          .from("productimages")
          .upload(`${Date.now()}_${image.name}`, image);
         // .upload("", image);

        datareturned = data;
      } catch (err) {
        console.log(err);
      } 
        if (datareturned) {
          productImage = datareturned.Key;
          setuploadProductData({ ...uploadProductData, Images: productImage });
        
      }
    }
  };

  const handleFormChange = (e: eventHandler  ) => {
    
      e.preventDefault();
      setuploadProductData({
        ...uploadProductData,
        [e.target.name]: e.target.value,
      });
    
  };
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
     e.preventDefault();
      setuploadProductData({
        ...uploadProductData,
        country: e.target.value,
      });
  }

  function setErrorFor(name, message) {
    if (typeof document !== "undefined") {
      const small = document.getElementById(name);
      small.innerHTML = message;
      small.style.color = "red";
    }
  }

  function setSuccessFor(input, inputName) {
    if (typeof document !== "undefined") {
      const small = document.querySelectorAll("input");
      small.forEach((item) => {
        item.style.borderColor = "green";
      });
    }
  }

  function validatorCheck(val, valtype) {
    function stringToArray(val) {
      return val.split("").length;
    }

    switch (valtype) {
      case "Name":
        if (stringToArray(val) < 5 || stringToArray(val) > 20) {
          setErrorFor(valtype, "This does not meet the length requirements");
        } else if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }
        break;
      case "ShortDesc":
        if (stringToArray(val) > 20) {
          setErrorFor(valtype, "Your description exceeds 20 characters");
        } else if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }

        break;
      case "Description":
        if (stringToArray(val) < 50) {
          setErrorFor(
            valtype,
            "Your description cannot be less than 50 characters"
          );
        } else if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }

        break;
      case "website":
        if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }

        break;
      case "country":
        if(val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }  
      break;
      case "stock":
        if (parseInt(val) < 50) {
          setErrorFor(valtype, "You need at least 50 units of your product");
        } else if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }

        break;
      case "extrainformation":
        if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }
        
        break;
      case "price":
        if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }
        
        break;
      case "salePrice":
        if (val === "") {
          setErrorFor(valtype, `This cannot be blank`);
        }
        
        break;
    }
  }

  const [
    uploadProductDataToDatabase,
    uploadDataReturned,
  ] = useUploadProductMutation();

  return (
    <>
      <div className="mx-auto flex  justify-center bg-white p-16 child:mx-9">
        <div>
          <form className="child:mb-7">
            <div className="">
              <div className="mb-7">
                <label
                  htmlFor="first_name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Product Title <span className="text-xl text-red-700">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required
                  name="Name"
                  onChange={handleFormChange}
                />
                <small id="Name"></small>
              </div>

              <div className="mb-7">
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Short Description{" "}
                  <span className="text-xl text-red-700">*</span>
                  <br />
                  <span>
                    (To be put onto Product listings for users to see)
                  </span>
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required
                  onChange={handleFormChange}
                  name="ShortDesc"
                />
                <small id="ShortDesc"></small>
              </div>
              <div className="mb-7">
                <label
                  htmlFor="phone"
                  className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Description<span className="text-xl text-red-700">*</span>
                </label>
              </div>
              <textarea
                minLength="50"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter your description"
                defaultValue=""
                onChange={handleTextAreaChange}
                name="desc"
              />
              <small id="Description"></small>
            </div>
            <div>
              <label
                htmlFor="website"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Link to original site
              </label>
              <input
                type="url"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="flowbite.com"
                required
                onChange={handleFormChange}
                name="website"
              />
              <small id="website"></small>
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Country<span className="text-xl text-red-700">*</span>
              </label>
             
              <select onChange={handleSelectChange} className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        {
        countries.map((item, index) => (
          <option key={index} value={item} >{item}</option>
        ))}
    </select>
              <small id="country"></small>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Stock<span className="text-xl text-red-700">*</span>
              </label>
              <input
                type="text"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="john.doe@company.com"
                required
                onChange={handleFormChange}
                name="stock"
              />
              <small id="stock"></small>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Extra information
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter extra information"
                defaultValue=""
                onChange={handleTextAreaChange}
                name="extrainformation"
              />
              <small id="extrainformation"></small>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price<span className="text-xl text-red-700">*</span>
              </label>
              <input
                type="text"
                id="confirm_password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="£"
                required
                onChange={handleFormChange}
                name="price"
              />
              <small id="price"></small>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sale Price:<span className="text-xl text-red-700">*</span>
              </label>
              <input
                type="text"
                id="confirm_password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="£"
                required
                onChange={handleFormChange}
                name="salePrice"
              />
              <small id="salePrice"></small>
            </div>
            <div className="mb-6 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  defaultValue=""
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            
                  name="isOnSale"
                  onChange={(e) => {
                    setuploadProductData({
                      ...uploadProductData,
                      [e.target.name]: e.target.checked,
                    });
                  }}
                />
                <small id="isOnSale"></small>
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Is on sale?
              </label>
              <span className="relative bottom-2 text-xl text-red-700">*</span>
            </div>
            <div className="mb-6 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  required
                  defaultValue=""
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <small></small>
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
              <span className="relative bottom-2 text-xl text-red-700">*</span>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              onClick={(e) => {
                submitProduct(e);
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex  justify-center">
          <div className="max-h-[500px] rounded-lg   border-2 bg-gray-50  shadow-xl">
            {uploadProductData.Images !== null ? (
              <div className="flex max-w-xl flex-col items-stretch justify-between">
                <div className="">
                  
                  <img
                    src={""}
                    className="max-h-full max-w-full"
                    alt="faulty image"
                  />
                </div>
                <div className="flex justify-center p-2">
                  <button
                    onClick={() => {
                      setuploadProductData({
                        ...uploadProductData,
                        Images: null,
                      });
                    }}
                    className="w-full rounded bg-blue-500 px-4 py-2 text-white shadow-xl"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              
              <>
                <div className="m-4">
                  <label className="mb-2 inline-block text-gray-500">
                    File Upload<span className="text-xl text-red-700">*</span>
                  </label>
                  <div className="flex w-full cursor-pointer  items-center justify-center">
                    <label className="flex h-32 w-full cursor-pointer flex-col border-4 border-dashed border-blue-200 p-40 hover:border-gray-300 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-400 group-hover:text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Attach a file
                        </p>
                      </div>
                      <input
                        type="file"
                        className="opacity-0"
                        accept="image/jpeg, image/png"
                        onChange={(e) => {
                          console.log(e.target.files)
                          setImage(e.target.files[0]);
                          handleImages(e);
                        }}
                        name="Images"
                      />
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadProduct;
