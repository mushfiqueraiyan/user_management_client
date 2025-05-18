import { createContext } from "react";

export const AuthContext = createContext();

const data = {};

const AuthProvider = ({ children }) => {
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
