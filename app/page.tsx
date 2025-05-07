import Image from "next/image";

export default function Home() {

  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

const chemists = people.filter(person => person.profession === 'chemist');
const physicists = people.filter(person => person.profession === 'physicist');
const mathematicians = people.filter(person => person.profession === 'mathematician');
const astrophysicists = people.filter(person => person.profession === 'astrophysicist');

  return ( <><div>
    <h1> Scientists</h1>
      
      {chemists.map((person) => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <p>{person.profession}</p>
        </div>
      ))}
       
     
       {physicists.map((person) => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <p>{person.profession}</p>
        </div>
      ))}

    </div>
    </>
  );
}
