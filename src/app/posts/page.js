'use client'
import React from 'react';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import Image from "next/image";
import TimImage from "../../../assets/tim.jpeg";

const Posts = () => {
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    };

    const {data: posts, error, isLoading} = useQuery({queryKey: ['posts'], queryFn: fetchPosts})
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    return (
        <>
            {posts.length > 0 && (
                <div className="grid grid-cols-2 gap-4 px-2">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col mt-6">
                            <div>
                                <img src={post.image} alt="" onClick={() => router.push(`/posts/${post.id}`)} className="cursor-pointer w-full"/>
                            </div>
                            <div>
                                <h3 className="text-3xl leading-snug text-left mb-4 mt-6">
                                    <a className="hover:underline cursor-pointer" onClick={() => router.push(`/posts/${post.id}`)}>
                                        {post.title}
                                    </a>
                                </h3>
                            </div>
                            <div className="text-lg">
                                {post.date}
                            </div>
                            <div className="mt-6 line-clamp-3">
                                {post.content}
                            </div>
                            <div className="mt-6 flex">
                                <div>
                                    <Image src={TimImage} alt="Author" className="w-12 h-12 rounded-full"/>
                                </div>
                                <div className="text-lg font-bold flex justify-center items-center pl-3">
                                    {post.author_name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </>
    );
};

export default Posts;