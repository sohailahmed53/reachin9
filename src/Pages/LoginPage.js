// src/Pages/LoginPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './LoginPage.css'; // Import the CSS file
import '../Styles/LoginPage.css'


const LoginPage = () => {
  useEffect(() => {
    // Perform any cleanup if needed
  }, []);

  return (
    <div className="login-container">
      {/* Header */}
      <div className="header">
        <img
          src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExDHJzIbIg-VW1nGMW3-eJ9CNLPdVNSVMokBbJOrtIVi3755XAtardu7TqGztt-n-RC5O0cas5OrR3ngwBiJuftHiaFSgyVuOCkPU~eD09ktGTpihJfYaAfTAA1C-jcizylPTzk7hAuLKZSa4weUTCqU3ZQHeHxOtPyKg2fTGjmBCtMF7qfnWQM1YtUxs5s-lTn6QaGFVvB6UchGHf7Z2SwWdfRfYmBOwM9oXRGbfaHALEXuM2XcFGEk3aTx1HVxNIwgnXGqgjMul5~bo2~gommPavsKripEo5HVO-W-nEFyu5Dy7BHh0afOYCF1i9N39mgcz9k89cmrwUA2rxP~MA__"
          alt="reachinbox-logo"
        />
      </div>

      {/* Login Box */}

      <div className="login-box">
        <p>Create new account</p>
        <div className="google-signin rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5 mb-12">
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg"
            alt="Google Logo"
          />
          <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-frontend.netlify.app/desktop">
            Sign Up with Google
          </Link>
        </div>


        <div className="create-account-btn">
          Create an account
        </div>
        <p className="text-gray-500">
          Already have an account? <span>Sign In</span>
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>©️ 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginPage;
