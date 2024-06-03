import React, { useState, useEffect } from "react";
import { getTopBusinessNews } from "../../API/news"; // Adjust the path based on your project structure
import TopBusinessView from "./topBusiness.view";

const TopBusinessContainer = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getTopBusinessNews();
        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return <TopBusinessView news={news} error={error} loading={loading} />;
};

export default TopBusinessContainer;
