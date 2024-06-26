/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import BlogCard from "../blog/BlogCard";
import { useFetchBlog } from "../hooks/useFetchBlog";
import Footer from "../Footer/Footer";
import ShimmerUI from "../../utils/ShimmerUI";

const Home = () => {
  const fetchedBlogs = useFetchBlog();
  const blogs = fetchedBlogs?.data;

  return (
    <div className="h-dvh">
      <Header />
      <div className="flex justify-center items-center md:mt-[8%] mt-[27%] min-h-[30vh]">
        <Link to={"/blog"}>
          <button className="bg-black text-white p-2 rounded-lg">
            Create Blog
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 mb-12 justify-items-center">
        {blogs ? (
          blogs.map((blogItem) => (
            <Link to={`/blogRead/${blogItem._id}`} key={blogItem._id}>
              <BlogCard
                key={blogItem._id}
                title={blogItem.title}
                description={blogItem.description}
                photoURL={blogItem.photo}
              />
            </Link>
          ))
        ) : (
          <>
            <ShimmerUI />
            <ShimmerUI />
            <ShimmerUI />
            <ShimmerUI />
            <ShimmerUI />
            <ShimmerUI />
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
