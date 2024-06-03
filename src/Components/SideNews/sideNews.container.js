import React, { useState, useEffect } from "react";
import { getTopWallStreetNews } from "../../API/news"; // Adjust the path based on your project structure
import SideNewsView from "./sideNews.view";

const SideNewsContainer = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopWallStreetNews();
        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return <SideNewsView news={news} error={error} loading={loading} />;
};

export default SideNewsContainer;
