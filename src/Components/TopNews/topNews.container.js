import React, { useState, useEffect } from "react";
import { getTopNews } from "../../API/applicationServices"; 
import TopNewsView from "./topNews.view";

const TopNewsContainer = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopNews();
        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return <TopNewsView news={news} error={error} loading={loading} />;
};

export default TopNewsContainer;
