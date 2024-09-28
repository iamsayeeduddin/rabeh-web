import { useState } from "react";
import useFonts from "@/utils/useFonts";
import { FaUpload } from "react-icons/fa";

const FinancialInfo = () => {
  const fonts = useFonts(); // Get the font object from the hook
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");

  // User information state
  const [userInfo, setUserInfo] = useState({
    theannualincome: "3,4490SAR ",
    Educationallevel: "level",
    primarysourceofincome: "source",
    networth: "445555SAR",
    anotherphone: "+9961234567890",
    nationality: "Egyptian",

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
      className={`personal-info ${fonts.spaceG.className} flex flex-col items-start justify-start`}
    >
      <div className="w-full   bg-white ">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-center mb-6">
            {isEditing ? (
              <> Edit Financial Information</>
            ) : (
              <> Financial Information</>
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

        <div className="user-info grid md:grid-cols-2 p-5 ">
          

          <div className="grid gap-4 mb-6">
            {isEditing ? (
              <>
                <div className="">
                  <div>

                  <label className="block text-gray-700 text-xs font-bold mb-2">
                  The annual income
                  </label>
                  <input
                    type="text"
                    name="The annual income"
                    value={userInfo.theannualincome}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full"
                    />
                    </div>
                 
                </div>
                <div>
                 
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-2">
                  Educational level
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.Educationallevel}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
               
                 
                <div className="mb-6 relative">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Primary source of income">
                Primary source of income
                </label>
                <div className="relative">
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-16`}
                    id=""
                    type="text"
                    value={userInfo.primarysourceofincome}
                    onChange={handleChange}
                  
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <select
                      className="block bg-transparent border-none bg-no-repeat text-gray-700 pr-8 focus:outline-none focus:bg-white h-full"
                      id="country-code"
                    >
                      <option value="ksa">trader</option>
                    </select>
                  </div>
                 
                </div>
              </div>

                   
              <div className="mb-6  ">
                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Net worth in Riyals (excluding house)                </label>
                <div className="relative">
                  <input
                    className={`appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-16`}
                    
                    type="text"
                   
                  
                  />
                 
                 
                </div>
              </div>

              <div>
                  <label className="block text-gray-700 text-sm mb-2">
                  Another phone
                  </label>
                  <input
                    type="phone"
                 
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                  
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
                <div className="flex flex-col gap-5 ">
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                    The annual income
                    </p>
                    <p> {`${userInfo.theannualincome} `}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                    Educational level                    </p>

                    <p>{userInfo.Educationallevel}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                    Primary source of income
                    </p>

                    <p> {userInfo.primarysourceofincome}</p>
                  </div>

                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                    Net worth in Riyals (excluding house)
                    </p>

                    <p> {userInfo.networth}</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                    Another phone
                    </p>

                    <p> {userInfo.anotherphone}</p>
                  </div>
                  <div>
                    <p className="text-[#495162] text-[12px] font-bold">
                     
                    </p>

                   
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

export default FinancialInfo;
