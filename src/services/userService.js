import Axios from "axios";
export async function register(user) {
  return await Axios.post("http://localhost:3005/resource-management/users", {
    fullname: user.fullname,
    email: user.email,
    password: user.password,
  });
}
