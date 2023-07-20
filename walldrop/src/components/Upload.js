import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [owner, setOwner] = useState('');
  const [photo, setPhoto] = useState('');
  const [genre, setGenre] = useState('iPhone');
  const [isPending, setIsPending] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const wallpaper = { title, body, owner, genre, photo: file ? file.name : null };
    const formData = new FormData();
    formData.append('file', file);
  
    setIsPending(true);
  
    try {
      const uploadResponse = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });
      if (!uploadResponse.ok) {
        throw new Error('Error uploading file');
      }
  
      const wallpaperResponse = await fetch('http://localhost:3001/wallpapers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(wallpaper),
      });
      if (!wallpaperResponse.ok) {
        throw new Error('Error adding wallpaper');
      }
  
      setIsPending(false);
      navigate('/explore');
    } catch (error) {
      console.error('Error:', error);
      setIsPending(false);
    }
  };
  

  return (
    <div className="upload">
      <h2>Add a New Wallpaper</h2>
      <form onSubmit={handleSubmit}>
        <label>Upload image:</label>
        <div>
          <Dropzone onDrop={handleFileDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag and drop a file here, or click to select a file</p>
              </div>
            )}
          </Dropzone>
          {file && (
            <div>
              <p>Uploaded File: {file.name}</p>
            </div>
          )}
        </div>
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
        {!isPending && <button>Add Wallpaper</button>}
        {isPending && <button disabled>Adding wallpaper...</button>}
      </form>
    </div>
  );
};

export default Upload;
