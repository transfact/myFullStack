import { useState, useEffect } from 'react';
import fakedata from './data/fakedata';
import './css/PostFunc.css';

export default function PostFunc() {
    console.log(fakedata);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setPosts(fakedata);
        }, 2000);
    }, []);

    useEffect(() => {}, [posts]);
    return (
        <>
            <h1>Poet List</h1>
            {posts.length == 0 ? (
                <h2>Loading...</h2>
            ) : (
                posts.map((post, idx) => {
                    return (
                        <div className="cardDiv" key={idx}>
                            <div className="cardTitle">
                                No.{idx + 1} <span>{post.title}</span>
                            </div>
                            <div className="cardBody">{post.body}</div>
                        </div>
                    );
                })
            )}
        </>
    );
}
