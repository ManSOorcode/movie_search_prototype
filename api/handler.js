export default async function handler(req, res) {
  const { search, page, imdb } = req.query;
  const apiUrl = `${process.env.VITE_OMDB_API_URL}`;
  const apiKey = `${process.env.VITE_OMDB_API_KEY}`;

  try {
    const url = search
      ? `${apiUrl}?apikey=${apiKey}&s=${search}&page=${page}`
      : `${apiUrl}?apikey=${apiKey}&i=${imdb}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`OMDB API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
}
