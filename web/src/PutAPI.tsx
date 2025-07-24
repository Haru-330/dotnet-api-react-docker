import { useEffect, useState } from "react";

function PutAPI() {
    const [items, setItems] = useState({
        title: '',
        author: ''
    });
    const [bookId, setId] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:5009/api/books/${bookId}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }, [bookId]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItems({ ...items, [event.target.name]: event.target.value });
    };

    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`http://localhost:5009/api/books/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(data => {
                console.log(data);
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    ID:<input type="number" onChange={handleIdChange} value={bookId} />
                    Title:<input type="text" onChange={handleInput} name="title" />
                    Author:<input type="text" onChange={handleInput} name="author" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PutAPI;