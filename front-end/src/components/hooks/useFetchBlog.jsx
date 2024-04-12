/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { SERVER } from "../../utils/Constant";

export const useFetchBlog = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetchBlog();
  }, []);
  const fetchBlog = async () => {
    const data = await fetch(`${SERVER}/api/v1/blogs/getblogs`);
    const json = await data.json();
    // console.log(json);
    setBlogs(json);
  };
  return blogs;
};
