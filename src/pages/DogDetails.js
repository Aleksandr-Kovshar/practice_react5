import { Suspense, useEffect, useRef } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";

const DogDetails = () => {
  // useEffect(()=>{
  // // HTTP запрос на бекенд, который нужен
  // }, [])

  // http://localhost:3000/dogs/dog-4
  // path="/dogs/:dogId"
  // const params = useParams();
  // console.log(params);

  //   http://localhost:3000/dogs?dogId=4
  // http://localhost:3000/dogs/dog-4
  // const backLinkLocationRef=useRef(location.state?.from ?? '/dogs');
  // http://localhost:3000/dogs/dog-4/gallery

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/dogs");

  const { dogId } = useParams();
  console.log(dogId);
  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      <ul>
        <li>
          <Link to="subbreeds">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Загрузка SubPage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
