import React from 'react';
import health from './Photo/health.jpg';
import mission from './Photo/mission-icon.jpg';
import './Petcare_guides.css';
import { Link } from 'react-router-dom';
import heroImage from './Photo/homepage1.jpg';
import mental from './Photo/mental.png';
import safety from './Photo/safety.png';
import petcare from './Photo/petcare.png'

const ServicesPage = () => {
  return (
    <div className="services2">
      <div className="hero2">
        <img src={heroImage} alt="Hero" className="hero-image2" />
        <div className="hero-text1">
          <div className="hero-content">
            <h3 className='hero-1'>Your new best friend is waiting for you!</h3>
            <Link to="/Adopt_us">
              <button className="hero-button">Adopt Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='services3'>
        <h1 className='services-title'>Pet Care Guides</h1>
        <h3 className='services-intro'>Caring for pets requires attention to their physical, mental, and emotional needs.</h3>
        <h3 className='services-intro'>Different pets have unique requirements based on their species, breed, age, and personality.</h3>
        <h3 className='services-intro'>Here’s a comprehensive guide on essential aspects of pet care for various types of animals:</h3>
      </div>

      
      <div className='services-container'>
    
        <div className='services-item'>
          <img src={petcare} alt="petcare" className="petcare" />
          <h3>Basic Care Essentials for All Pets</h3>
          <ul>
            <li className='li-format'>
              <strong>Nutrition:</strong> High-quality, species-appropriate food is essential for pet health. Dogs and cats need protein-rich diets, while rabbits and guinea pigs require fiber from hay and vegetables. Fish and reptiles often need specific diets tailored to their species.
            </li>
            <br></br>
            <li>
              <strong>Fresh Water:</strong> Access to fresh, clean water at all times is essential to prevent dehydration and support metabolism.
            </li>
            <br></br>
            <li>
              <strong>Shelter and Comfort:</strong> Pets need a safe, comfortable place to rest. Dogs and cats appreciate cozy beds, while smaller animals like hamsters need spacious cages and hiding places.
            </li>
            <br></br>
            <li>
              <strong>Grooming:</strong> Regular grooming, including brushing, nail trimming, and dental care, is essential for most pets. Dogs often require regular baths, while cats generally groom themselves but may need help with brushing.
            </li>
            <br></br>
            <li>
              <strong>Veterinary Care: </strong>Regular check-ups and vaccinations are key to preventing illness. Deworming, flea control, and routine dental exams are also essential for maintaining health.
            </li>
          </ul>
        </div>

        
        <div className='services-item'>
          <img src={mission} alt="Foster Care Program" className="mission" />
          <h3>Species-Specific Care</h3>
          <ul>
            <h3>Dogs</h3>
            <li>
              <strong>Exercise:</strong> Most dogs need daily exercise, ranging from short walks to intensive play sessions, depending on their breed and age. Exercise helps prevent obesity, keeps joints healthy, and improves mental well-being.
            </li>
            <br></br>
            <li>
              <strong>Socialization:</strong> Dogs are social animals and enjoy spending time with their family or other dogs. Proper socialization from a young age helps prevent behavioral issues.
            </li>
            <br></br>
            <li>
              <strong>Training:</strong> Training not only helps with obedience but also enhances bonding. Basic commands and crate training are often recommended.
            </li>
          </ul>

          <ul>
            <h3>Cats</h3>
            <li>
              <strong>Enrichment:</strong> Cats are natural hunters and benefit from toys that mimic prey, such as feather wands or laser pointers. Vertical spaces like cat trees encourage climbing and provide a sense of security.
            </li>
            <br></br>
            <li>
              <strong>Litter Box Maintenance:</strong> Cleanliness is crucial, as cats are sensitive to odors and may avoid a dirty litter box.
            </li>
            <br></br>
            <li>
              <strong>Mental Stimulation:</strong> Cats enjoy puzzles, scratching posts, and interactive play to keep their minds engaged.
            </li>
          </ul>

        </div>

        
        <div className='services-item'>
          <img src={mental} alt="mental" className="mental" />
          <h3>Mental and Emotional Well-being</h3>
          <ul>
            <li>
              <strong>Routine and Consistency:</strong> Pets thrive on routine. Feeding, walking, and playing at regular times reduce stress.
            </li>
            <br></br>
            <li>
              <strong>Bonding Time:</strong> Spending quality time with pets through play, training, or just sitting together strengthens the bond and fulfills their need for companionship.
            </li>
            <br></br>
            <li>
              <strong>Alone Time Training:</strong> Help pets, especially dogs, become comfortable being alone to reduce separation anxiety. Start with short periods and gradually increase the time.
            </li>
            <br></br>
            <li>
              <strong>Behavioral Enrichment:</strong> Offering new toys, food puzzles, and changing the environment periodically stimulates curiosity and mental health.
            </li>
          </ul>

        </div>

        
        <div className='services-item'>
          <img src={safety} alt="safety" className="safety" />
          <h3>Safety and Environmental Control</h3>
          <ul>
            <li>
              <strong>Pet-Proofing:</strong> Keep potentially harmful items out of reach. For example, dogs and cats can access chemicals, sharp objects, or small items they may swallow.
            </li>
            <br></br>
            <li>
              <strong>Microchipping and Identification:</strong> Microchipping, along with a collar ID, increases the chances of reuniting with lost pets.
            </li>
            <br></br>
            <li>
              <strong>Poison Control:</strong> Be aware of foods, plants, and household products that can be toxic. Common dangers include chocolate, onions, and certain houseplants.
            </li>
          </ul>
        </div>
        
        <div className='services-item'>
          <img src={health} alt="health image" className="health" />
          <h3>Understanding Pet Health and Common Illnesses</h3>
          <ul>
            <li>
              <strong>Recognize Signs of Illness:</strong> Symptoms like changes in eating, behavior, and energy levels can signal health issues.
            </li>
            <br></br>
            <li>
              <strong>Preventive Care:</strong> Vaccines, parasite control, and regular vet visits prevent many illnesses.
            </li>
            <br></br>
            <li>
              <strong>Dental Health:</strong> Poor dental hygiene leads to gum disease, especially in dogs and cats. Routine brushing and vet check-ups help maintain dental health.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
