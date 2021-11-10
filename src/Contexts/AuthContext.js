import { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
export const AuthContexts = createContext();
const AuthProvider = ({ children }) => {
  const allcontexts = useFirebase();
  return (
    <AuthContexts.Provider value={allcontexts}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;
