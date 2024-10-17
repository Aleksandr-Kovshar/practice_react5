const { useParams } = require("react-router-dom");

// useEffect(()=>{
  // // HTTP запрос на бекенд, который нужен
  // }, [])

const Gallery = () => {
  const { dogId } = useParams();
  return <div>Image Gallery: {dogId}</div>;
};


export default Gallery;