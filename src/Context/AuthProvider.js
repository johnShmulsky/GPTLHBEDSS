import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = () => {
    window.location.href = "/.auth/login/aad";
    setIsLoading(true);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/getuser")
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
        localStorage.setItem("AuthenticatedUser", JSON.stringify(json));
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const handleLogOut = () => {
    window.location.href = "/.auth/logout";
    localStorage.removeItem("AuthenticatedUser");
  };

  const handleLogoutClose=()=>{
    window.location.href = "/.auth/logout/complete";
  }

  const authenTicated = userData?.userRoles.find((role) => {
    if (role === "authenticated") {
      return true;
    } else {
      return false;
    }
  });

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{ isLoading, userData, handleLogin, handleLogOut, authenTicated,handleLogoutClose }}
    >
      {children}
    </AuthContext.Provider>
  );
};
