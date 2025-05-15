import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import Link from 'next/link';

// import technologies from '../api/dummyTechnologies';

const TechDetails = () => {
  // const techs = technologies;
  // const techsList = techs.map((tech) => {
  //   return (
  //     <div
  //       key={tech.id}
  //       className="flex flex-col gap-2 p-2 m-2 bg-gray-100 rounded-md"
  //     >
  //       <h3 className="text-lg font-bold">{tech.name}</h3>
  //       <p>{tech.description}</p>
  //       <Link href={`/techs/${tech.id}`} className="text-blue-500 underline">
  //         View Details
  //       </Link>
  //     </div>
  //   );
  // });
  const router = useRouter();
  const { tech } = router.query;
  const [techDetails, setTechDetails] = useState(null);
  const pathname = usePathname();

  // useEffect(() => {
  //   if (id) {
  //     // Fetch the course details based on the id
  //     fetch(`/api/techs/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => setTechDetails(data))
  //       .catch((error) => console.error('Error fetching tech details:', error));
  //   }
  // }, [id]);

  // if (!techDetails) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {/* <h1>{techDetails.name}</h1>
      <p>{techDetails.description}</p> */}
      {/* Add more details as needed */}
      <p>{'Pathname : ' + pathname}</p>
      {JSON.stringify(tech, null, 2)}
    </div>
  );
};

export default TechDetails;
