import { async } from "regenerator-runtime";

const fetchUrls = async (pathname = "http://localhost:3000/get/urls") => {
  const response = await fetch(pathname);
  const data = await response.json();
  return data;
};

export default fetchUrls;
