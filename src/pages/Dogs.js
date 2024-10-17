import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Dogs = () => {
  const [dogs, setDogs] = useState([
    "dog-1",
    "dog-2",
    "dog-3",
    "dog-4",
    "dog-5",
  ]);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get("dogId")??"";

  // useEffect(()=>{
  // // HTTP запрос на бекенд, который нужен
  // }, [])

  const visibleDogs = dogs.filter((dog) => dog.includes(dogId));

  const updateQueryString = (e) => {
    const dogIdValue = e.target.value;
    if (dogIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });
  };

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />

      <ul>
        {visibleDogs.map((dog) => {
          return (
            <li key={dog}>
              <Link  to={`${dog}`} state={{from:location}}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
