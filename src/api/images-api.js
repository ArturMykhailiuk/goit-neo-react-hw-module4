import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery, page) => {
  const { data } = await axios(`search/photos`, {
    params: {
      query: searchQuery.trim(),
      hitsPerPage: 10,
      page,
    },
    headers: {
      Authorization: `Client-ID ${"JJkdMQQs1421O0ZOaKfwfijjXQPBusjoz0zZyomXkgs"}`,
    },
  });
  console.log(data);
  return data;
};
