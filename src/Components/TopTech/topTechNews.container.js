import React, { useState, useEffect } from "react";
import { getTopTechNews } from "../../API/news"; // Adjust the path based on your project structure
import TopTechNewsView from "./topTechNews.view";

const TopTechNewsContainer = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopTechNews();
        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return <TopTechNewsView news={news} error={error} loading={loading} />;
};

export default TopTechNewsContainer;
