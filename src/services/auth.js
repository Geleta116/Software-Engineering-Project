import Axios from "axios";
import { toast } from "react-toastify";
Axios.interceptors.response.use(null, (error) => {
  const { response } = JSON.parse(JSON.stringify(error));
  const expectedError =
    response && response.status >= 400 && response.status < 500;
  if (expectedError) {
    return Promise.reject(error);
  }
  toast.error("Unexpected Error occured");
});

export async function login(email, password) {
  console.log(email);
  const { data: jwt } = await Axios.post(
    "http://localhost:3005/resource-management/login",
    { email: email, password: password }
  );
  console.log(jwt);

  localStorage.setItem("token", jwt);
  return jwt;
}
export async function loginJWT(token) {
  localStorage.setItem("token", token);
}
export async function logout() {
  localStorage.removeItem("token");
}
