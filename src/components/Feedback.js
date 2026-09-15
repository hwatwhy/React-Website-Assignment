import React, { useEffect, useState } from "react";
import "./Feedback.css";

// Sample data for testimonials
const testimonialsData = [
  {
    id: 1,
    text: {
      part1: "Adopting Bella was the best decision we ever made!",
      part2: "She’s brought so much joy into our lives.",
    },
    name: "Sarah & John",
    image: "https://photos.peopleimages.com/picture/202212/2571499-adoption-couple-and-feeding-dog-at-vet-bonding-and-having-fun.-foster-care-interracial-love-and-happy-man-and-woman-giving-pet-food-at-animal-shelter-playing-or-enjoying-quality-time-together-fit_400_400.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    text: {
      part1: "Max has been the perfect addition to our family.",
      part2: "Thank you for helping us find our furry friend!",
    },
    name: "Emily",
    image: "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/52/05207a9d-f42f-5e32-bd6b-b90fbb2b9a8c/5fcbd1735e974.image.jpg?resize=695%2C500",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    text: {
      part1: "Adopting Luna was life-changing.",
      part2: "She’s brought so much love into our home. Thank you for making the process so easy!",
    },
    name: "Michael & Lisa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpoH2bdrG1Ht3jrG5je6Sxur4RJSYuykfbjQ&s",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    text: {
      part1: "Charlie is a bundle of joy!",
      part2: "We’re so glad we adopted him, and the team was so helpful throughout the process.",
    },
    name: "David",
    image: "https://people.com/thmb/HWZXfWQKyJwiAyqoJOn2pclxnFs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/dan-levy-1-86682845467d4d11b244624bc256fb86.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    text: {
      part1: "Adopting Maximus has been the best decision we’ve made.",
      part2: "He’s brought so much happiness to our family!",
    },
    name: "Rachel",
    image: "https://nypost.com/wp-content/uploads/sites/2/2021/04/adoption-1.jpg?quality=75&strip=all",
    rating: "⭐⭐⭐⭐⭐",
  }
];

const Feedback = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Move to the next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  // Move to the previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // Automatically change testimonial every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="adopter-reviews">
      <div className="testimonial-container">
        {/* Only display the active testimonial */}
        {testimonialsData.map((testimonial, index) =>
          index === currentTestimonial ? (
            <div
              key={testimonial.id}
              className="testimonial-card slide-in" // Optional class for animation
            >
              <img src={testimonial.image} alt="Adopted Pet" />
              <blockquote>
                <p>{testimonial.text.part1}</p>
                <p>{testimonial.text.part2}</p>
              </blockquote>
              <cite>{testimonial.name}</cite>
              <div className="rating">{testimonial.rating}</div>
            </div>
          ) : null
        )}
      </div>

      {/* Indicator Dots */}
      <div className="indicator-dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentTestimonial ? "active-dot" : ""}`}
            onClick={() => setCurrentTestimonial(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
