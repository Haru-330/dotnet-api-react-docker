import { useState, useEffect } from 'react'

type Book = {
    bookId: number;
    title: string;
    author: string;
}

function GetAPI() {

    const [posts, setPosts] = useState<Book[]>([])

    useEffect(() => {
        fetch('http://localhost:5009/api/books', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setPosts(data.items)
            })
    }, [])

    return (
        <div>
            <p>📕本の一覧</p>
            {posts.length === 0 ? (
                <p>データがありません</p>
            ) : (
                <table border={1} cellPadding="8">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タイトル</th>
                            <th>作者</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.bookId}>
                                <td>{post.bookId}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default GetAPI;
