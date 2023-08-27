"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Cover from "../../../../assets/cover.jpg";
import Image from "next/image";

const Post = () => {
  const { id } = useParams(); // Call useParams unconditionally
  const postId = Number(id);
  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:3000/posts");
    return response.data;
  };

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (postId >= 1 && postId <= posts.length) {
    return (
      <div className="flex flex-col items-center w-full h-screen">
        <div className="border-b bg-accent">
          <div className="text-sm px-4 py-2 bg-gray-50 sm:text-center">
            The source code for this blog is
            <a
              className="underline ml-1"
              href="https://github.com/minthant-gic/vercelBlog"
            >
              available on Github
            </a>
          </div>
        </div>
        <div className="max-w-5xl w-full h-32 flex flex-col mt-10 px-5">
          <div>
            <span className="text-3xl font-bold">Blog.</span>
          </div>
          <div className="text-6xl font-semibold mt-12 mb-5">
            {posts[id - 1].title}
          </div>
          <div className="mb-8 font-bold">{posts[id - 1].author}</div>
          <div>
            <Image
              src={Cover}
              alt=""
              className="h-52 md:h-fit cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full max-w-lg flex flex-col">
              <span className="my-6">{posts[id - 1].date}</span>
              <span>{posts[id - 1].content}</span>
            </div>
          </div>

          {/*Footer*/}
          <div className="bg-gray-200 flex flex-col mt-10  md:grid md:grid-cols-6 justify-center items-center text-center px-3 sm:px-2 py-20">
            <span className="font-bold text-3xl col-span-3 mr-3">
              Statically Generated with Next.js.
            </span>
            <button className="bg-black px-10 py-3 sm:mx-10 border col-span-2 text-white my-8 font-medium hover:bg-white hover:text-black duration-300 hover:border-black">
              <a href="https://nextjs.org/">Read Documentation</a>
            </button>
            <span className="font-bold">
              <a href="https://github.com/aungmyomyat4980/BlogFridayTest.git">
                View on GitHub
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Post;
