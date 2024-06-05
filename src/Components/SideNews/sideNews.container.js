import React, { useState, useEffect } from "react";
import { getTopWallStreetNews } from "../../API/applicationServices";
import SideNewsView from "./sideNews.view";

const SideNewsContainer = () => {
  const [newsWithDates, setNewsWithDates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopWallStreetNews();
        const newsDataWithDates = data.articles.map(article => {
          const d = new Date(article.publishedAt);
          return {
            article: article,
            date: d
          };
        });
        setNewsWithDates(newsDataWithDates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return <SideNewsView newsWithDates={newsWithDates} error={error} loading={loading} />;
};

export default SideNewsContainer;
