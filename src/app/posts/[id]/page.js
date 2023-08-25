'use client'
import React from 'react';
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "next/navigation";

const postData = () => {
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4000/posts');
        return response.data;
    };
    const { data: posts, error, isLoading } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const {id} = useParams()
    return (
        <>
        <div>
            {
                posts[id-1].title
            }
        </div>
        </>
    );
};

export default postData;