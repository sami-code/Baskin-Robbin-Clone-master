import GenericService from "./GenericServices";
import jwtDecode from "jwt-decode";

class UserService extends GenericService {
  constructor() {
    super();
  }

  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  register = (name, email, password) =>
    this.post("users/register", { name, email, password });

  logout = () => {
    localStorage.clear();
  };
  isLoogedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInuser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  IsAdmin = () => {
    if (this.isLoogedIn()) {
      if (this.getLoggedInuser().role === "admin") return true;
      else return false;
    }
  };
}
let userService = new UserService();

export default userService;
