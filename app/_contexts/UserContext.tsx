import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TOKEN, USER_DATA } from "../_util/Constants";
import { links } from "@/routes/links";
const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem(USER_DATA);
    if (userData) setUser(userData);
  }, []);

  const setUserData = (res) => {
    if (res.data.user) {
      setUser(res.data);
      Cookies.set(TOKEN, res.data.user.token);
      localStorage.setItem(USER_DATA, JSON.stringify(res.data.user));
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove(TOKEN);
    localStorage.removeItem(USER_DATA);
  };
  return (
    <UserContext.Provider value={{ user, setUser, setUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
