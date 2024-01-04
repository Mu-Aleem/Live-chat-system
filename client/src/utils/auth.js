export const logout = () => {
  localStorage.removeItem("chatuser");
  window.location.pathname = "/login";
};
