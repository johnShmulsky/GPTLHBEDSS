import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

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

  const userRole = userData?.userRoles?.map((role) => role[2]);
  console.log(userRole);

  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{ isLoading, userData, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};