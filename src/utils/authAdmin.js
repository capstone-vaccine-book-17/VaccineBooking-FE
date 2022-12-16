import Cookies from "js-cookie";

export const authAdmin = {
  setLogin: (data) => {
    Cookies.set("token", data);
  },
  setAuth: () => {
    if (Cookies.get("token")) {
      return true;
    } else {
      return false;
    }
  },
};
