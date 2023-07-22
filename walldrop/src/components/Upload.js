import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Dropzone from 'react-dropzone';

const Upload = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [owner, setOwner] = useState('');
  const [photo, setPhoto] = useState('');
  const [genre, setGenre] = useState('iPhone');
  const [isPending, setIsPending] = useState(false);
  const [file, setFile] = useState(null);

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
      const uploadResponse = await fetch('https://walldrop-backend.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      const wallpaperResponse = await fetch('https://walldrop-backend.onrender.com/wallpapers', {
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
      <h2>{t('upload.title')}</h2>
      <form onSubmit={handleSubmit}>
        <label>{t('upload.uploadImageLabel')}</label>
        <div>
          <Dropzone onDrop={handleFileDrop}>
            {({ getRootProps, getInputProps }) => (
              <div style={{ backgroundColor: '#555' }} {...getRootProps()}>
                <input {...getInputProps()} />
                <p>{t('upload.dragAndDrop')}</p>
                <p>{t('upload.orClick')}</p>
              </div>
            )}
          </Dropzone>
          {file && (
            <div>
              <p>{t('upload.uploadedFileText')} {file.name}</p>
            </div>
          )}
        </div>
        <label>{t('upload.genreLabel')}</label>
        <select required value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="iPhone">{t('upload.iphoneOption')}</option>
          <option value="Desktop">{t('upload.desktopOption')}</option>
        </select>
        <label>{t('upload.wallpaperTitleLabel')}</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>{t('upload.wallpaperDescriptionLabel')}</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>{t('upload.wallpaperOwnerLabel')}</label>
        <input
          type="text"
          required
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        {!isPending && <button>{t('upload.addWallpaperButton')}</button>}
        {isPending && <button disabled>{t('upload.addingWallpaperButton')}</button>}
      </form>
    </div>
  );
};

export default Upload;
