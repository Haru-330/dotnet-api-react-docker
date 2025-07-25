import { useState } from 'react';

function DeleteAPI() {
    const [id, setId] = useState('');

    const handleChange = (event: { target: { value: any; }; }) => {
        setId(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        fetch(`http://localhost:5009/api/books/${id}`, {
            method: 'DELETE',
        })
            .then(data => {
                console.log(data);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    本のID:
                    <input type="text" name="id" onChange={handleChange} />
                </label>
                <button type="submit">削除</button>
            </form>
        </div>
    );
};

export default DeleteAPI;