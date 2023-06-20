import axios from 'axios';
import { useEffect, useState } from 'react';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/superheroes')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading........</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div className='rq-superhero'>
        <h2>Super Heroes Page</h2>
        {data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      </div>
    </>
  );
};
