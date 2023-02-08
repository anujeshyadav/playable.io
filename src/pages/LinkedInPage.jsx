import React, { useState } from "react";

import { useLinkedIn } from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
// import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77gjlb9q0zg0o1",
    // clientId: "86vhj2q7ukf83q",
    // redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    redirectUri: `https://mymanager.com/login`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <span
        onClick={linkedInLogin}
        // src={linkedin}

        style={{ maxWidth: "180px", cursor: "pointer" }}
        type="button"
      >
        Add LinkedIn
      </span>
    </>
  );
}

export default LinkedInPage;
