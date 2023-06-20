import axios from 'axios';
import { useQueries, useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:3000/superheroes');
};

export const RQSuperHeroesPage = () => {
  // call the hook in our component. It takes two argument
  // first is the unique key to identify the query and the second argument is the function
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    'super_heroes',
    fetchSuperHeroes,

    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      enabled: false,
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h1>Loading the data...........</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h2> RQSuper Heroes Page</h2>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
