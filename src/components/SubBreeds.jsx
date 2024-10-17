const { useParams } = require("react-router-dom");

export const SubBreeds = () => {

// useEffect(()=>{
  // // HTTP запрос на бекенд, который нужен
  // }, [])

  const { dogId } = useParams();
  return <div>SubBreeds: {dogId}</div>;
};

export default SubBreeds;