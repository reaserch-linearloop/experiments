// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import "./style/home.css";
// import Loader from "../components/Loader";
// // import pr
// const OAuthComponent = () => {
//   const [error, setError] = useState('');
//   const [pageLoading, setPageLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleAuth = async () => {
//     try {
//       // Redirect user to Fynd's OAuth authorization endpoint
//       window.location.href = "https://fynd.com/oauth/authorize";
//       // navigate.push("https://fynd.com/oauth/authorize")

//       // setError("Button Clicked ")
//     } catch (error) {
//       setError("Soemthing Went Wrong While Authentication");
//     }
//   };

//   // Check for OAuth code in URL params on component mount
//   // This is called when the user is redirected back from Fynd
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');

//     const url = window.location.pathname;

//     // Split the URL by "/"
//     const parts = url.split("/");




//     // Extract the parameters -----> From URL parameters 
//     const companyId = parts[2];
//     const token = parts[3];

//     if (companyId) {
//       // Exchange code for access token
//       axios.get(`/auth/fynd/callback?code=${companyId}`)
//         .then((data) => {
//           // Redirect to data component after successful authentication
//           // history.push(`/$data`);
//           // setError(data);

//         })
//         .catch((error) => {
//           setError('Error occurred during authentication');
//         });
//     }
//     else{
//       setError(companyId)
//     }
//   }, []);

//   return (
//     <>
//       {pageLoading ? (
//         <Loader />
//       ) : (
//         <div className="application-container ">

//           <div className="sales-channels-container">
//             <h1>OAuth Authentication with Fynd</h1>
//             {error && <p>{error}</p>}
//             <button className='button' onClick={handleAuth}>Authenticate with Fynd</button>
//           </div>

//         </div>
//       )}
//     </>
//   );
// };

// export default OAuthComponent;
