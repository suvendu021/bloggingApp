import { useEffect, useState } from "react";
import { SERVER } from "../../utils/Constant";

export const useFetchParticularBlog = (blogId) => {
  //   console.log(blogId);
  const [currentBlog, setCurrentBlog] = useState(null);
  useEffect(() => {
    fetchParticularBlog();
  }, []);

  const fetchParticularBlog = async () => {
    const data = await fetch(`${SERVER}/api/v1/blogs/blogRead/${blogId}`);
    const json = await data.json();
    // console.log(json);
    setCurrentBlog(json);
  };
  return currentBlog;
};
