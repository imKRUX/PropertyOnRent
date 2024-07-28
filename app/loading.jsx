"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
     display: "block",
     margin: "100px auto",
};

const LoadingPage = ({ loading }) => {
     return (
          <ClipLoader
               color="#3b82"
               loading={loading}
               cssOverride={override}
               size={150}
               aria-label="Loading Spinnner"
          />
     );
};

export default LoadingPage;
