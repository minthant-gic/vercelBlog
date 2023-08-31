"use client";
import React from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "next/navigation";
import {router} from "next/client";

const Post = () => {
    const {id} = useParams(); // Call useParams unconditionally
    const postId = Number(id);
    const fetchPosts = async () => {
        const response = await axios.get("http://localhost:3000/posts");
        return response.data;
    };

    const {
        data: posts,
        error,
        isLoading,
    } = useQuery({queryKey: ["posts"], queryFn: fetchPosts});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (postId >= 1 && postId <= posts.length) {
        return (
            <div className="flex flex-col w-full h-screen">
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
                <div className="flex flex-col">
                    <div className="mt-10 px-2 sm:pl-0">
                        <div>
                            <span className="text-3xl font-bold sm:pl-6">Blog.</span>
                        </div>
                        <div className="sm:text-9xl text-6xl font-semibold mt-12 mb-5 pl-2 text-center sm:text-left">
                            {posts[id - 1].title}
                        </div>
                        <div className="mb-8 font-bold sm:pl-6">{posts[id - 1].author_name}</div>
                        <div>
                            <img src={posts[id - 1].image} alt="" onClick={() => router.push(`/posts/${posts[2].id}`)}
                                 className="h-52 md:h-fit cursor-pointer w-full"/>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="w-full max-w-xl flex flex-col">
                                <span className="my-6 mt-6 text-lg">{posts[id - 1].date}</span>
                                <span className="text-lg">{posts[id - 1].content}</span>
                                <span className="mt-6 text-lg">{posts[id - 1].content_body}</span>
                                <span className="mt-10 text-3xl">{posts[id - 1].sub_title}</span>
                                <span className="mt-6 text-lg">{posts[id - 1].sub_content}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="border-t bg-accent p-4 flex flex-col sm:flex-row justify-center items-center sm:py-12 sm:mt-28">
                    <div
                        className="text-3xl font-bold text-center pt-24 sm:w-1/2 sm:flex sm:text-left sm:items-center sm:-mt-24 sm:text-4xl">
                        Statically Generated with Next.js.
                    </div>
                    <div className="sm:flex sm:flex-row sm:w-1/2 sm:justify-center sm:items-center sm:-mt-4">
                        <a className="bg-black hover:bg-white px-8 mx-12 mt-6 text-white hover:text-black
                font-bold py-3 flex justify-center items-center border border-black"
                           href="https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts">
                            Read Documentation
                        </a>
                        <a className="flex justify-center items-center mt-6 font-bold hover:underline"
                           href="https://github.com/minthant-gic/vercelBlog">
                            View on Github
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Post;
