import React, { useState, useEffect, Suspense } from "react";
import { Ilogin } from "../Model/ILogin";
import axios from "axios";
import "../asset/CSS/Loader.css";

// interface loginCredential {
//   username: string;
//   password: string;
// }

const LoginApi: React.FC<any> = (props: { credential: Ilogin }) => {
  console.log("hii");
  const [loginresponse, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = React.useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:57678/api/Login/Logincheck",
        {
          UserName: props.credential.username,
          Password: props.credential.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [props.credential]);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {loading ? (
        <div>
          <Suspense
            fallback={
              <div className="loader-container">
                <div className="spinner"></div>
              </div>
            }
          >
            {loginresponse}
          </Suspense>
        </div>
      ) : (
        { loginresponse }
      )}
    </>
  );
};

export default LoginApi;
