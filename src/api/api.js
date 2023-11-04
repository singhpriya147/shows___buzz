const fetchMe = (endPoint) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${endPoint}`)
    .then((response) => response.json())
    .then((data) => data);
};

export { fetchMe };
