import { useState } from 'react';

function PostAPI() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        if (name === 'author') {
            setAuthor(value);
        } else if (name === 'title') {
            setTitle(value);
        }
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const book = {
            author: author,
            title: title
        };

        fetch('http://localhost:5009/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Book title:
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label>
                    Book author:
                    <input type="text" name="author" onChange={handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default PostAPI;