import { useState, useEffect } from 'react';
import getObjects from '../../api/pokeObjects';
import ObjectCard from '../../components/Card/ObjectCard';


const ObjectsPage = () => {
  const [objects, setObjects] = useState([]);
  const [detailedObjects, setDetailedobjects] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  const fetchData = async (url) => {
    const data = await getObjects(url);
    setObjects(data.results);
    setNextPage(data.next);
    setPreviousPage(data.previous);
    console.log(data.results);
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      const promises = objects.map((object) =>
        fetch(object.url).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      setDetailedobjects(results);
      
    };

    if (objects.length > 0) fetchDetails();
    
  }, [objects]);



  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center py-6">POKESTORE</h1>

      <div className="flex justify-center gap-6 mb-4">
        {previousPage && (
          <button
            onClick={() => fetchData(previousPage)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Previous
          </button>
        )}
        {nextPage && (
          <button
            onClick={() => fetchData(nextPage)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Next
          </button>
        )}
       
      </div>
     <div className="flex flex-wrap justify-center gap-6 px-4">
        {detailedObjects.map((object, index) => (
          <ObjectCard key={index} item={object} />
        ))}
      </div>
     
    </div>
  );
};

export default ObjectsPage;
