import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URL;

const Analytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(`${BACKEND_URI}/analytics/all`);
        setAnalytics(response.data.data);
      } catch (error) {
        console.error("Error fetching analytics:", error);
        alert("Failed to fetch analytics. Please try again.");
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      {analytics.length ? (
        <table>
          <thead>
            <tr>
              <th>Short URL</th>
              <th>Original URL</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {analytics.map((data) => (
              <tr key={data.shortId}>
                <td>
                  <a href={`${BACKEND_URI}/${data.shortId}`} target="_blank" rel="noopener noreferrer">
                    {data.shortId}
                  </a>
                </td>
                <td>{data.originalUrl}</td>
                <td>{data.clickCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Analytics;
