import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import "./AnimalDetails.css"

const animals = [
  { id: 1, name: 'Max', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Cross-Breed', price: 250, photo: 'https://spca.org.sg/wp-content/uploads/2024/01/IMG-20231221-WA0038.jpg', temperament: ['Active', 'Energetic', 'Loyal', 'Playful', 'Obedient'] },
  { id: 2, name: 'Whiskers', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Domestic Shorthair', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0045.jpg', temperament: ['Curious', 'Affectionate', 'Playful', 'Independent', 'Intelligent'] },
  { id: 3, name: 'Bella', type: 'Dog', ageGroup: 'Adult', gender: 'Female', breed: 'golden retriever', price: 150, photo: 'https://spca.org.sg/wp-content/uploads/2023/10/IMG-20231005-WA0031.jpg', temperament: ['Friendly', 'Gentle', 'Loyal', 'Intelligent', 'Patient'] },
  { id: 4, name: 'Shadow', type: 'Cat', ageGroup: 'Senior', gender: 'Male', breed: 'Domestic Shorthair', price: 25, photo: 'https://spca.org.sg/wp-content/uploads/2024/09/IMG-20240930-WA0082.jpg', temperament: ['Independent', 'Affectionate', 'Quiet', 'Calm', 'Playful'] },
  { id: 5, name: 'Charlie', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Black Tan', price: 250, photo: 'https://spca.org.sg/wp-content/uploads/2022/12/Benny_2.jpg', temperament: ['Energetic', 'Loyal', 'Playful', 'Affectionate', 'Curious'] },
  { id: 6, name: 'Milo', type: 'Cat', ageGroup: 'Adult', gender: 'Male', breed: 'Local', price: 80, photo: 'https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240820-WA0037.jpg', temperament: ['Independent', 'Curious', 'Playful', 'Affectionate', 'Loyal'] },
  { id: 7, name: 'Daisy', type: 'Dog', ageGroup: 'Senior', gender: 'Female', breed: 'Cross-Breed', price: 70, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-11-at-3.38.53-PM.jpeg', temperament: ['Gentle', 'Affectionate', 'Loyal', 'Calm', 'Intelligent'] },
  { id: 8, name: 'Luna', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Local', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2023/11/IMG-20231113-WA0014.jpg', temperament: ['Playful', 'Curious', 'Energetic', 'Independent', 'Loyal'] },
  { id: 9, name: 'Rocky', type: 'Dog', ageGroup: 'Adult', gender: 'Male', breed: 'Cross-Breed', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2023/07/IMG-20230705-WA0012.jpg', temperament: ['Active', 'Loyal', 'Obedient', 'Affectionate', 'Playful'] },
  { id: 10, name: 'Ginger', type: 'Cat', ageGroup: 'Adult', gender: 'Female', breed: 'Domestic Shorthair', price: 80, photo: 'https://spca.org.sg/wp-content/uploads/2024/05/IMG-20240514-WA0026.jpg', temperament: ['Affectionate', 'Quiet', 'Playful', 'Curious', 'Independent'] },
  { id: 11, name: 'Rex', type: 'Dog', ageGroup: 'Senior', gender: 'Male', breed: 'Cross-Breed', price: 70, photo: 'https://spca.org.sg/wp-content/uploads/2024/11/IMG-20241115-WA0016.jpg', temperament: ['Loyal', 'Gentle', 'Playful', 'Obedient', 'Intelligent'] },
  { id: 12, name: 'Lily', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Domestic Shorthair', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/11/IMG-20241115-WA0038.jpg', temperament: ['Curious', 'Playful', 'Independent', 'Affectionate', 'Energetic'] },
  { id: 13, name: 'Ziggy', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Cross-Breed', price: 250, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-22-at-8.22.46-AM.jpeg', temperament: ['Playful', 'Energetic', 'Loyal', 'Curious', 'Affectionate'] },
  { id: 14, name: 'Coco', type: 'Cat', ageGroup: 'Adult', gender: 'Female', breed: 'Domestic Shorthair', price: 80, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0006.jpg', temperament: ['Loyal', 'Affectionate', 'Quiet', 'Playful', 'Independent'] },
  { id: 15, name: 'Duke', type: 'Dog', ageGroup: 'Adult', gender: 'Male', breed: 'Cross-Breed', price: 80, photo: 'https://www.asdsingapore.com/assets/images/adopts/fin-20220327150217.jpg', temperament: ['Loyal', 'Playful', 'Obedient', 'Energetic', 'Friendly'] },
  { id: 16, name: 'Pumpkin', type: 'Cat', ageGroup: 'Senior', gender: 'Female', breed: 'Cross-Breed', price: 25, photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0022.jpg', temperament: ['Gentle', 'Independent', 'Loyal', 'Affectionate', 'Quiet'] },
  { id: 17, name: 'Buster', type: 'Dog', ageGroup: 'Senior', gender: 'Male', breed: 'Cross-Breed', price: 70, photo: 'https://www.asdsingapore.com/assets/images/adopts/tarzan-20230103112157.jpg', temperament: ['Affectionate', 'Quiet', 'Playful', 'Curious', 'Independent'] },
  { id: 18, name: 'Nala', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Cross-Breed', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/09/IMG-20240917-WA0035.jpg', temperament: ['Loyal', 'Playful', 'Obedient', 'Energetic', 'Friendly'] },
  { id: 19, name: 'Oliver', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed: 'Cross-Breed', price: 250, photo: 'https://www.asdsingapore.com/assets/images/adopts/titus-1736.jpg', temperament: ['Gentle', 'Independent', 'Loyal', 'Affectionate', 'Quiet'] },
  { id: 20, name: 'Toby', type: 'Cat', ageGroup: 'Adult', gender: 'Male', breed: 'Local', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240829-WA0061.jpg', temperament: ['Playful', 'Energetic', 'Affectionate', 'Loyal', 'Obedient'] },
  { id: 21, name: 'Scout', type: 'Dog', ageGroup: 'Adult', gender: 'Female', breed: 'X-breed', price: 80, photo: 'https://www.asdsingapore.com/assets/images/adopts/lucky-b-20220327145734.jpg', temperament: ['Loyal', 'Playful', 'Energetic', 'Affectionate', 'Obedient'] },
  { id: 22, name: 'Simba', type: 'Cat', ageGroup: 'Senior', gender: 'Male', breed: 'local', price: 25, photo: 'https://spca.org.sg/wp-content/uploads/2024/03/CatDusty-20240315-2.jpg', temperament: ['Playful', 'Energetic', 'Gentle', 'Obedient', 'Loyal'] },
  { id: 23, name: 'Winnie', type: 'Dog', ageGroup: 'Puppy', gender: 'Female', breed: 'Cross-Breed', price: 250, photo: 'https://www.asdsingapore.com/assets/images/adopts/niu-niu-20230125173841.jpg', temperament: ['Active', 'Loyal', 'Playful', 'Obedient', 'Affectionate'] },
  { id: 24, name: 'Mimi', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed: 'Local', price: 100, photo: 'https://spca.org.sg/wp-content/uploads/2023/01/20220927_AH156282_1-scaled.jpg', temperament: ['Curious', 'Playful', 'Energetic', 'Independent', 'Affectionate'] }
];


const AnimalDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const animal = animals.find(a => a.id === parseInt(id)); // Find the animal by id
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.fromPage || 1;
  console.log(animal);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  if (!animal) {
    return <p>Animal not found</p>; // Handle case if the animal is not found
  }

  const onAdoptClick = (id) => {
    navigate(`/adopt_form/${id}`, { state: { fromPage } }); // Redirect to the animal detail page
  };

  return (

    <div className="details-container">
      <div className="right-image">

        <img src={animal.photo} alt={`${animal.name} the ${animal.type}`} />
      </div>
      <div className="left-content">
        <h2>Animal Details</h2>
        <p><strong>Name:</strong> {animal.name}</p>
        <p><strong>Species:</strong> {animal.type}</p>
        <p><strong>Breed:</strong> {animal.breed}</p>
        <p><strong>Age Group:</strong> {animal.ageGroup}</p>
        <p><strong>Gender:</strong> {animal.gender}</p>
        <p><strong>Temperament:</strong> {animal.temperament.join(', ')}</p>
        <p><strong>Adoption Price:</strong> ${animal.price}</p>
        <button className="button-adopt" onClick={() => onAdoptClick(animal.id)}>Adopt {animal.name} Now</button>
      </div>
    </div>

  );
};

export default AnimalDetails;
