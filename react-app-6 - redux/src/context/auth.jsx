import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState({
    name: "Context John Doe",
    email: "john@mail.com",
    address: "Baker Street",
  });

  const [bookList, setBookList] = useState(["Sherlock", "hamlet"]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const storeValue = {
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,
    user,
    bookList,
  };

  return (
    <AuthContext.Provider value={storeValue}>{children}</AuthContext.Provider>
  );
};
