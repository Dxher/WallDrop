import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [owner, setOwner] = useState('');
  const [photo, setPhoto] = useState(null);
  const [genre, setGenre] = useState('iPhone');
  const [isPending, setIsPending] = useState(false);
  const[file, setFile] = useState();
  const navigate = useNavigate();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const wallpaper = { title, body, owner, genre, photo};
    const formData = new FormData();
    formData.append('file', file)

    setIsPending(true);

    fetch('http://localhost:8000/wallpapers', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wallpaper)
    }).then(() => {
      setIsPending(false);
      navigate('/explore');
    })

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  return (
    <div className="upload">
      <h2>Add a New Wallpaper</h2>
      <form onSubmit={handleSubmit}>
        <label>Upload image:</label>
        <input 
          type="file" 
          accept="image/*"          
          value={photo}
          onChange={handleFileChange}
        />
        <label>Genre:</label>
        <select
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="iPhone">iPhone</option>
          <option value="Desktop">Desktop</option>
        </select>
        <label>Wallpaper title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Wallpaper description:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Wallpaper owner: (could be a stage name)</label>
        <input 
          type="text" 
          required 
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        { !isPending && <button>Add Wallpaper</button>}
        { isPending && <button disabled>Adding wallpaper...</button>}

      </form>
    </div>
  );
}
 
export default Upload;