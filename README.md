# React + TypeScript + Vite For Project Setup & API Integration

## 1. Clone the Repository
 First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

## 2. Install Dependencies
Ensure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
```

## 3. Set Up the API Key
 1. Create a .env file in the root of the project if it doesn't already exist.
 2. Add your OMDB API key to the .env file:

```bash
REACT_APP_OMDB_API_KEY = your-api-key-here
```

## 4. Running the Application Locally
Once dependencies are installed, you can run the application locally using the following command:
```bash
npm run dev
```

This will start the development server, and you can view the app by navigating to http://localhost:number in your browser.

## 5. Testing the APIs
I have integrated two APIs for searching and getting details about movies:

<span>Search Movies API:</span>
<ul>
  <li>URL: http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=movies&page=3</li>
  <li>Method: GET</li>
  <li>Parameters:</li>
  <ul>
     <li>s: The search term (e.g., "movies")</li>
     <li> page: The page number for pagination (e.g., "3")</li>
  </ul>
</ul>
   

<span>Get Movie Details API:</span>
<ul>
  <li>URL: http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=tt0286944</li>
  <li>Method: GET</li>
  <li>Parameters:</li>
<ul>
     <li> i: The IMDb ID of the movie (e.g., "tt0286944")</li>
</ul>
</ul>
   
## 6. Additional Notes
<ul>
<li>
Ensure that you have your OMDB API key saved in the .env file.</li>
  <li>
You can modify the search query or IMDb ID to get different results from the APIs.
</li>
<li>
The APIs have rate limits, so avoid excessive requests in a short time to prevent being blocked. 
per day limit (1,000 daily limit)
</li>
</ul>

## 7. How to test API in Postman
### First Api
<ul>
  <li>URL: http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=movies&page=3</li>
</ul>
<img src=https://github.com/user-attachments/assets/1750d6be-35d2-4992-af00-0744d3c6f220 alt="first api" />

### Second Api
<ul>
<li>URL: http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=tt0286944</li>
</ul>
<img src=https://github.com/user-attachments/assets/3a3c75d4-60e9-4ba4-9fc7-eba8e0a0db2b alt="second api"/>

## 8. API Handling with Tenstack Query

This project uses Tenstack Query (formerly React Query) to handle API requests. Tenstack Query is used for fetching, caching, and synchronizing the movie data. The integration ensures efficient handling of server data and state management in React.

 For example, you can fetch movie data using Tenstack Query like this:

```js
import { useQuery } from '@tanstack/react-query';

const fetchMovies = async () => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=movies&page=3`);
  return response.json();
};

const MoviesList = () => {
  const { data, error, isLoading } = useQuery(['movies'], fetchMovies);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      {data?.Search.map((movie: any) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};
```








