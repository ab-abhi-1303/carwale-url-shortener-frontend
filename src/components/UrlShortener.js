import React, { useState } from "react";
import axios from "axios";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URL;

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    try {
      const response = await axios.post(`${BACKEND_URI}/shorten`, {
        originalUrl,
      });
      setShortUrl(response.data.data.shortUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div>
      <h2>Shorten a URL</h2>
      <input type="text" placeholder="Enter URL" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (
        <p>
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
};

export default UrlShortener;
