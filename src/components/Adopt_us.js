import React, { useState, useRef } from 'react';
import "./Adopt_us.css";
import { useNavigate } from 'react-router-dom';
import heroImage from './Photo/heroadoption-img1.jpg';


// Main Component
function AdoptUs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [animalType, setAnimalType] = useState('all');
  const [ageGroup, setAgeGroup] = useState('all');
  const [gender, setGender] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const navigate = useNavigate();
  const galleryRef = useRef(null);


  const animals = [
    { id: 1, name: 'Max', type: 'Dog', ageGroup: 'Puppy', gender: 'Male', breed:'Cross-Breed', photo: 'https://spca.org.sg/wp-content/uploads/2024/01/IMG-20231221-WA0038.jpg' },
    { id: 2, name: 'Whiskers', type: 'Cat', ageGroup: 'Kitten', gender: 'Female',breed:'Domestic Shorthair', photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0045.jpg' },
    { id: 3, name: 'Bella', type: 'Dog', ageGroup: 'Adult', gender: 'Female',breed:'golden retriever', photo: 'https://spca.org.sg/wp-content/uploads/2023/10/IMG-20231005-WA0031.jpg' },
    { id: 4, name: 'Shadow', type: 'Cat', ageGroup: 'Senior', gender: 'Male',breed:'Domestic Shorthair', photo: 'https://spca.org.sg/wp-content/uploads/2024/09/IMG-20240930-WA0082.jpg' },
    { id: 5, name: 'Charlie', type: 'Dog', ageGroup: 'Puppy', gender: 'Male',breed:'Black Tan', photo: 'https://spca.org.sg/wp-content/uploads/2022/12/Benny_2.jpg' },
    { id: 6, name: 'Milo', type: 'Cat', ageGroup: 'Adult', gender: 'Male', breed:'Local', photo: 'https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240820-WA0037.jpg' },
    { id: 7, name: 'Daisy', type: 'Dog', ageGroup: 'Senior', gender: 'Female',breed:'Cross-Breed', photo: 'https://spca.org.sg/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-11-at-3.38.53-PM.jpeg' },
    { id: 8, name: 'Luna', type: 'Cat', ageGroup: 'Kitten', gender: 'Female',breed:'Local', photo: 'https://spca.org.sg/wp-content/uploads/2023/11/IMG-20231113-WA0014.jpg' },
    { id: 9, name: 'Rocky', type: 'Dog', ageGroup: 'Adult', gender: 'Male', breed:'Cross-Breed', photo: 'https://spca.org.sg/wp-content/uploads/2023/07/IMG-20230705-WA0012.jpg' },
    { id: 10, name: 'Ginger', type: 'Cat', ageGroup: 'Adult', gender: 'Female',breed:'Domestic Shorthair', photo: 'https://spca.org.sg/wp-content/uploads/2024/05/IMG-20240514-WA0026.jpg' },
    { id: 11, name: 'Rex', type: 'Dog', ageGroup: 'Senior', gender: 'Male', breed:'Cross-Breed', photo: 'https://spca.org.sg/wp-content/uploads/2024/11/IMG-20241115-WA0016.jpg' },
    { id: 12, name: 'Lily', type: 'Cat', ageGroup: 'Kitten', gender: 'Female',breed:'Domestic Shorthair', photo: 'https://spca.org.sg/wp-content/uploads/2024/11/IMG-20241115-WA0038.jpg' },
    { id: 13, name: 'Ziggy', type: 'Dog', ageGroup: 'Puppy', gender: 'Male',breed:'Cross-Breed', photo: 'https://spca.org.sg/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-22-at-8.22.46-AM.jpeg' },
    { id: 14, name: 'Coco', type: 'Cat', ageGroup: 'Adult', gender: 'Female',breed:'Domestic Shorthair', photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0006.jpg' },
    { id: 15, name: 'Duke', type: 'Dog', ageGroup: 'Adult', gender: 'Male', breed:'Cross-Breed', photo: 'https://www.asdsingapore.com/assets/images/adopts/fin-20220327150217.jpg' },
    { id: 16, name: 'Pumpkin', type: 'Cat', ageGroup: 'Senior', gender: 'Female',breed:'Cross-Breed', photo: 'https://spca.org.sg/wp-content/uploads/2024/10/IMG-20241023-WA0022.jpg' },
    { id: 17, name: 'Buster', type: 'Dog', ageGroup: 'Senior', gender: 'Male',breed:'Cross-Breed', photo: 'https://www.asdsingapore.com/assets/images/adopts/tarzan-20230103112157.jpg' },
    { id: 18, name: 'Nala', type: 'Cat', ageGroup: 'Kitten', gender: 'Female',breed:'Cross-Breed', photo: 'https://spca.org.sg/wp-content/uploads/2024/09/IMG-20240917-WA0035.jpg' },
    { id: 19, name: 'Oliver', type: 'Dog', ageGroup: 'Puppy', gender: 'Male',breed:'Cross-Breed', photo: 'https://www.asdsingapore.com/assets/images/adopts/titus-1736.jpg' },
    { id: 20, name: 'Toby', type: 'Cat', ageGroup: 'Adult', gender: 'Male', breed:'Local', photo: 'https://spca.org.sg/wp-content/uploads/2024/08/IMG-20240829-WA0061.jpg' },
    { id: 21, name: 'Scout', type: 'Dog', ageGroup: 'Adult', gender: 'Female', breed:'X-breed', photo: 'https://www.asdsingapore.com/assets/images/adopts/lucky-b-20220327145734.jpg' },
    { id: 22, name: 'Simba', type: 'Cat', ageGroup: 'Senior', gender: 'Male',breed:'local', photo: 'https://spca.org.sg/wp-content/uploads/2024/03/CatDusty-20240315-2.jpg' },
    { id: 23, name: 'Winnie', type: 'Dog', ageGroup: 'Puppy', gender: 'Female', breed:'Cross-Breed', photo: 'https://www.asdsingapore.com/assets/images/adopts/niu-niu-20230125173841.jpg' },
    { id: 24, name: 'Mimi', type: 'Cat', ageGroup: 'Kitten', gender: 'Female', breed:'Local', photo: 'https://spca.org.sg/wp-content/uploads/2023/01/20220927_AH156282_1-scaled.jpg' }
  ];


  const filteredAnimals = animals.filter((animal) => {
    const searchLower = searchTerm.toLowerCase();
    
    const matchesSearchTerm =
      animal.name.toLowerCase().includes(searchLower) ||
      animal.type.toLowerCase().includes(searchLower) ||
      animal.ageGroup.toLowerCase().includes(searchLower) ||
      animal.gender.toLowerCase() === searchLower;
  
    const matchesType = animalType === 'all' || animal.type.toLowerCase() === animalType.toLowerCase();
    const matchesAgeGroup = ageGroup === 'all' || animal.ageGroup.toLowerCase() === ageGroup.toLowerCase();
    const matchesGender = gender === 'all' || animal.gender.toLowerCase() === gender.toLowerCase();
  
    return matchesSearchTerm && matchesType && matchesAgeGroup && matchesGender;
  });
  
  const totalPages = Math.ceil(filteredAnimals.length / itemsPerPage);
  const indexOfLastAnimal = currentPage * itemsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - itemsPerPage;
  const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAdoptClick  = (id,currentPage) => {
    navigate(`/animal/${id}`, { state: { fromPage: currentPage } }); // Redirect to the animal detail page
  };

  // Function to scroll to the gallery
  const scrollToGallery = () => {
    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div  className='filter'>
      <div className='hero-section3'>
        <img src={heroImage} alt="Hero" className="hero-image3" />
        <div className='hero-content'>
          <h3 className='hero'>Adoption Gallery</h3>
          <button onClick={scrollToGallery} className="hero-button">View Our Gallery</button>
          <p>Thank you for your interest in adopting an animal!</p>
        </div>
      </div>

      <div className='filter-bar'>
        <div>
        <input className='search'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>


        <div className='filter1'>
          <p>Categories:</p>
          <select value={animalType} onChange={(e) => setAnimalType(e.target.value)}>
            <option value="all">All</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </div>

        <div className='filter1'>
          <p>Ages Group:</p>
          <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
            <option value="all">All</option>
            <option value="Puppy">Puppy</option>
            <option value="Kitten">Kitten</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div className='filter1'>
          <p>Gender:</p>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef} className="gallery">
        {currentAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} onAdoptClick={handleAdoptClick} />
        ))}
      </div>

      <div className="pagination">
        <div className="pagination-buttons">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
      </div>
    </div>
  );
}

// AnimalCard Component
function AnimalCard({ animal, onAdoptClick,currentPage }) {
  return (
    <div className="animal-card">
      <img src={animal.photo} alt={`${animal.name} the ${animal.type}`} style={{ width: '100%', height: '250px' }} />
      <h2>{animal.name}</h2>
      <button className="adopt-button" onClick={() => onAdoptClick(animal.id,currentPage)}>More details</button>
    </div>
  );
}

export default AdoptUs;