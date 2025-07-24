import { useState, useEffect } from 'react'

type Sample = {
    id: number;
    title: string;
}

function GetAPI() {

    const [posts, setPosts] = useState<Sample[]>([])

    useEffect(() => {
        fetch('http://localhost:5009/api/books', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setPosts(data.items)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default GetAPI;
