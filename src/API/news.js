const API_KEY = process.env.REACT_APP_API;
const BASE_URL = "https://newsapi.org/v2";

//get top news headlines
export const getTopNews = async () => {
  const type = "top-headlines";
  const query = "sources=bbc-news";
  const url = `${BASE_URL}/${type}?${query}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Fetching news failed: " + error.message);
  }
};

//get top business news headlines
export const getTopBusinessNews = async () => {
  const type = "top-headlines";
  const category = "country=us&category=business";
  const url = `${BASE_URL}/${type}?${category}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Fetching news failed: " + error.message);
  }
};

//get top tech news headlines
export const getTopTechNews = async () => {
  const type = "top-headlines";
  const category = "sources=techcrunch";
  const url = `${BASE_URL}/${type}?${category}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Fetching news failed: " + error.message);
  }
};

//get top Wall Street Journal news
export const getTopWallStreetNews = async () => {
  const category = "domains=wsj.com";
  const url = `${BASE_URL}/everything?${category}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Fetching news failed: " + error.message);
  }
};