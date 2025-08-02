export default function authHeader() {
  const obj = localStorage.getItem("authUser")
    ? localStorage.getItem("authUser")
    : "";

  if (obj) {
    return `Bearer ${obj}`;
  } else {
    return "";
  }
}
