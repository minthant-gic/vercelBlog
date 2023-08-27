'use client'
import React from 'react';
import Cover from "../../assets/cover.jpg"
import Image from "next/image";
import Logo from "../../assets/logo.jpeg"
import subCover from "../../assets/sub_cover.jpg"
import TimImage from "../../assets/tim.jpeg"
import subCoverOne from "../../assets/sub_cover_one.jpg"
import JoeImage from "../../assets/joe.jpeg"
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
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
    const router = useRouter()
    return (
        <>
            {posts.length >0 && (
                <div className="flex flex-col">
                    <div className="border-b bg-accent">
                        <div className="text-sm px-4 py-2 bg-gray-50 sm:text-center">
                            The source code for this blog is<a className="underline ml-1"
                                                               href="https://github.com/minthant-gic/vercelBlog">available
                            on Github</a>
                        </div>
                    </div>
                    <div
                        className="flex flex-col mt-16 items-center justify-center sm:flex sm:flex-row sm:justify-between sm:items-center sm:p-4">
                        <h1 className="text-6xl font-bold tracking-tighter leading-tight sm:text-8xl">Blog.</h1>
                        <h5 className="text-center text-lg mt-4">A statically generated blog example using <a
                            className="underline" href="https://nextjs.org/">Next.js</a> and Markdown.</h5>
                    </div>
                    <div className="mt-16 p-4 sm:mt-8">
                        <div>
                            <Image src={Cover} alt="cover" onClick={() => router.push(`/posts/${posts[0].id}`)}
                                   className="cursor-pointer"/>
                        </div>
                        <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
                            <div className="sm:w-1/2">
                                <h3 className="text-4xl leading-tight text-left mb-4 mt-6 sm:mt-16 sm:text-5xl">
                                    <a className="hover:underline cursor-pointer" onClick={() => router.push(`/posts/${posts[0].id}`)}>
                                        {posts[0].title}</a>
                                </h3>
                                <div className="text-lg">
                                    March 16,2020
                                </div>
                            </div>
                            <div className="sm:w-1/2">
                                <div className="mt-6 sm:mt-16 sm:text-lg line-clamp-3">
                                    {posts[0].content}
                                </div>
                                <div className="mt-6 flex">
                                    <div>
                                        <Image src={Logo} alt="logo" className="w-12 h-12 rounded-full"/>
                                    </div>
                                    {/*{users.length > 0 && (*/}
                                    <div className="text-lg font-bold flex justify-center items-center pl-3">
                                        {posts[0].author_name}
                                    </div>
                                    {/*)}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold sm:text-6xl p-4 mt-12">More Stories</h2>
                    <div className="sm:flex sm:flex-row p-4">
                        <div className="flex flex-col sm:w-1/2 sm:mr-28">
                            <div>
                                <Image src={subCover} alt="sub_cover" className="mt-8 cursor-pointer" onClick={() => router.push(`/posts/${posts[1].id}`)}/>
                            </div>
                            <div>
                                <h3 className="text-3xl leading-snug text-left mb-4 mt-6">
                                    <a className="hover:underline cursor-pointer" onClick={() => router.push(`/posts/${posts[1].id}`)}>
                                        {posts[1].title}</a></h3>
                            </div>
                            <div className="text-lg">
                                March 16,2020
                            </div>
                            <div className="mt-6 line-clamp-3">
                                {posts[1].content}
                            </div>
                            <div className="mt-6 flex">
                                <div>
                                    <Image src={TimImage} alt="Author" className="w-12 h-12 rounded-full"/>
                                </div>
                                <div className="text-lg font-bold flex justify-center items-center pl-3">
                                    {posts[1].author_name}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-0 flex flex-col mb-16 sm:w-1/2">
                            <div>
                                <Image src={subCoverOne} alt="sub_cover" className="mt-8 cursor-pointer" onClick={() => router.push(`/posts/${posts[2].id}`)}/>
                            </div>
                            <div>
                                <h3 className="text-3xl leading-snug text-left mb-4 mt-6">
                                    <a className="hover:underline cursor-pointer" onClick={() => router.push(`/posts/${posts[2].id}`)}>
                                        {posts[2].title}</a></h3>
                            </div>
                            <div className="text-lg">
                                March 16,2020
                            </div>
                            <div className="mt-6 line-clamp-3">
                                {posts[2].content}
                            </div>
                            <div className="mt-6 flex">
                                <div>
                                    <Image src={JoeImage} alt="Author" className="w-12 h-12 rounded-full"/>
                                </div>
                                <div className="text-lg font-bold flex justify-center items-center pl-3">
                                    {posts[2].author_name}
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer
                        className="border-t bg-accent p-4 flex flex-col sm:flex-row justify-center items-center sm:h-56 sm:mt-28">
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
                    </footer>
                </div>
            )}
        </>
    );
};

export default Home;