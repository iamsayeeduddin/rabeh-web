import { useState } from "react";
import useFonts from "@/utils/useFonts";
import { FaUpload } from "react-icons/fa";

const PersonalInfo = () => {
  const fonts = useFonts(); // Get the font object from the hook
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");

  // User information state
  const [userInfo, setUserInfo] = useState({
    firstName: "Mohamed",
    lastName: "Abo Soliman",
    email: "mohamed@abosoliman.com",
    phoneNumber: "+96812345688",
    createdAt: "24/3/2024 - 07:00 PM",
    nationality: "Egyptian",
    idFile: "Passport",
    image: "/assets/mohd_alosaimi.png",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedDocument(file.name); 
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prevInfo) => ({ ...prevInfo, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    // Handle save logic
    console.log("User Info Saved:", userInfo);
    setIsEditing(false);
  };

  return (
    <div
      className={`personal-info ${fonts.spaceG.className} flex items-start justify-start`}
    >
      <div className="w-full   bg-white ">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">
            {isEditing ? (
              <>Personal Information</>
            ) : (
              <>Edit Personal Information</>
            )}
          </h3>

          <div className="flex justify-end mb-4">
            {!isEditing && (
              <button
                className="  font-semibold py-2 px-4 rounded-md flex flex-row text-[15px] text-[#495162] gap-3 border-2"
                onClick={handleEditClick}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3018 3.69978C15.8137 3.21162 15.0222 3.21162 14.534 3.69978L13.8733 4.36052L15.6411 6.12829L16.3018 5.46754C16.79 4.97939 16.79 4.18793 16.3018 3.69978ZM14.4626 7.3068L12.6948 5.53903L3.33464 14.8992V16.6966H5.07279L14.4626 7.3068ZM13.3555 2.52126C14.4946 1.38223 16.3413 1.38223 17.4803 2.52126C18.6193 3.66029 18.6193 5.50702 17.4803 6.64605L6.00722 18.1191C5.85094 18.2754 5.63898 18.3632 5.41797 18.3632H2.5013C2.04106 18.3632 1.66797 17.9901 1.66797 17.5299V14.554C1.66797 14.333 1.75577 14.121 1.91205 13.9647L13.3555 2.52126Z"
                    fill="#495162"
                  />
                </svg>
                Edit
              </button>
            )}
          </div>
        </div>

        <div className="user-info grid grid-cols-3 p-5">
          <div className="flex  mb-6">
            <label htmlFor="upload-image">
              <img
                src={userInfo.image}
                alt="Profile"
                className="rounded-full w-40 h-40 cursor-pointer object-cover"
              />
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="grid gap-4 mb-6">
            {isEditing ? (
              <>
                <div className="flex flex-row gap-2">
                  <div>

                  <label className="block text-gray-700 text-xs font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userInfo.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full"
                    />
                    </div>
                    <div>

                   <label className="block text-gray-700 text-xs font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userInfo.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full"
                    />
                    </div>
                </div>
                <div>
                 
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
               
                 
                <div className="mb-6 relative">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                phone Number
                </label>
                <div className="relative">
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-16`}
                    id="phone"
                    type="text"
                    value={userInfo.phoneNumber}
                    onChange={handleChange}
                  
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <select
                      className="block bg-transparent border-none bg-no-repeat text-gray-700 pr-8 focus:outline-none focus:bg-white h-full"
                      id="country-code"
                    >
                      <option value="ksa">KSA</option>
                    </select>
                  </div>
                 
                </div>
              </div>

                   
              <div className="mb-6  ">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" >
               Role
                </label>
                <div className="relative">
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-16`}
                    
                    type="text"
                   
                  
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <select
                      className="block bg-transparent border-none bg-no-repeat text-gray-700 pr-8 focus:outline-none focus:bg-white h-full"
                    
                    >
                      <option value="ksa">Investor</option>
                    </select>
                  </div>
                 
                </div>
              </div>

              <div>
                  <label className="block text-gray-700 text-sm mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                 
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                  
                </div>

                <div className="mb-6">
                    <label
                      className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="documentFile"
                    >
                      Upload Document
                    </label>
                    <div
                      className={`flex flex-col items-center justify-center border-dashed border-2 `}
                    >
                      <FaUpload className="text-gray-400 mb-2" size={24} />
                      <p className="text-gray-500 text-center">
                        <span className="text-primary">
                        Click to upload </span>
                          or drag and drop 
                      </p>
                      <p className="text-gray-500">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                      <input
                        type="file"
                        id="documentFile"
                        className="hidden"
                        
                        
                        
                      />
                    </div>
                   
                  </div>
  
  


                <div className="flex justify-between mb-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="  border border-[#CFD3DE] text-[#495162] font-bold py-2 px-4 rounded-lg w-full mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary  text-white font-bold py-2 px-4 rounded-lg w-full"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
          
              </>
            ) : (
              <>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                      Full Name{" "}
                    </p>
                    <p> {`${userInfo.firstName} ${userInfo.lastName}`}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                      Email{" "}
                    </p>

                    <p>{userInfo.email}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                      Phone number{" "}
                    </p>

                    <p> {userInfo.phoneNumber}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                      Created at{" "}
                    </p>

                    <p> {userInfo.createdAt}</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                      Nationality{" "}
                    </p>

                    <p> {userInfo.nationality}</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                      Passport{" "}
                    </p>

                    <div className="md:w-[900px] rounded-md shadow-sm border h-full flex flex-row gap-5 p-2">
                      <div className="mt-2">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4 0C2.89543 0 2 0.89543 2 2V22C2 23.1046 2.89543 24 4 24H20C21.1046 24 22 23.1046 22 22V0H4ZM22 1.57356e-05V4L18 1.53859e-05L22 1.57356e-05Z"
                            fill="#CFD3DE"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18 0V3.99998H22L18 0Z"
                            fill="#949EB5"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 8V4H18L22 8Z"
                            fill="#AFB7C8"
                          />
                          <rect
                            x="1"
                            y="8"
                            width="22"
                            height="12"
                            rx="1"
                            fill="#7860DC"
                          />
                          <path
                            d="M5.06578 17V11.4H8.44978V12.008H5.73778V13.888H8.23378V14.496H5.73778V17H5.06578ZM9.38609 17V11.4H10.0581V17H9.38609ZM11.3392 17V11.4H12.0112V16.392H14.8432V17H11.3392ZM15.7064 17V11.4H19.1544V12.008H16.3784V13.88H18.9304V14.488H16.3784V16.392H19.1944V17H15.7064Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="text-sm mt-2">
                        {" "}
                        File.pdf <br /> 200KB
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

         

          
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
