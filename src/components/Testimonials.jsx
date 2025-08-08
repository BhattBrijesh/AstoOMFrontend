import React, { useState } from "react";

import { Typography } from "@mui/material";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // let testimonials = [
  //   {
  //     image: c1,
  //     text: "I am based in Delhi and post corona I faced a lot of issues in my work arena due to the pandemic. I was about to give up on my job when I came to know About Astro Om Solution. I reached him sceptically, but solved my problems with his amazing calculations.",
  //     name: "Honey Sharma, Architect",
  //     location: "India",
  //   },
  //   {
  //     image: c2,
  //     text: "Due to work from home situation for the last few years, I have lost all contact with my friends. It put a toll on my mental health. I wasn't able to do my tasks on time and used to stay in my room only. My mom book an online consultation with Astro Om Solution and everything changed.",
  //     name: "Raj Soni, It Specialist",
  //     location: "India",
  //   },
  //   {
  //     image: c3,
  //     text: "I moved here two years ago due to studies. While my classes were about to start but my Visa wasn't confirming, I visited Astro Om Solution with lots of doubts. He cleared all my doubts after checking my Kundali and helped me with some solutions.",
  //     name: "Somya Lalwani, Student",
  //     location: "USA",
  //   },
  //   {
  //     image: c4,
  //     text: "When I started my journey as a dance coordinator, I faced lots of issues. I gave up initially, but then with the constant insist of my parents I contacted Astro Om Solution. He checked my kundali, did some calculations, and told me why such things were happening with me.",
  //     name: "Ila Gomtis, Dancer",
  //     location: "India",
  //   },
  //   {
  //     image: c1,
  //     text: "I am getting lot of loss in my business since last 3 years. I am heard About Astro Om Solution, I meet him and took his advice for business growth, now my business running nicely and recover all losses with help of his business astrology advices.",
  //     name: "Nayan Patel, Business Owner",
  //     location: "Canada",
  //   },
  //   {
  //     image: c2,
  //     text: "My parents not allowed me for love marriage. I have taken help of famous astrologer Astro Om Solution. Now my parents and in-law parents allowed our love marriage. I am happily living my marriage life.",
  //     name: "Avadh Bhadresi, Tutor",
  //     location: "Australia",
  //   },
  // ];
  let testimonials = []
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="ast_testimonial_wrapper ast_toppadder70 ast_bottompadder70 bg1">
      <div className="container">
        <div className="row"
        >
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ast_heading" style={{ textAlign: "center" }}>
              <Typography variant="h4" component="h1">
                What {"  "}
                <span style={{ color: "#ff9800" }}>client says</span>
              </Typography>
              <p>
                We at Astro Om Solution are eager to provide vedic astrology
                services. Read what our important customers have to say about
                us.
              </p>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 col-sm-12 col-12 offset-lg-1 offset-md-0 offset-sm-0 offset-0">
            <div className="ast_testimonials_slider">
              <div className="testimonial-container">
                <button
                  className="testimonial-btn prev"
                  onClick={prevTestimonial}
                >
                  ‹
                </button>
                <div className="ast_testimonials_slider_box" style={{ textAlign: 'center' }}>
                  <img
                    loading="lazy"
                    src={testimonials[currentTestimonial].image}
                    alt="Testimonial"
                  />
                  <div className="ast_testimonials_slider_box_text">
                    <Typography sx={{ width: "80rem" }}>
                      {testimonials[currentTestimonial].text}
                    </Typography>
                    <h4>
                      {testimonials[currentTestimonial].name}
                      <span>{testimonials[currentTestimonial].location}</span>
                    </h4>
                  </div>
                </div>
                <button
                  className="testimonial-btn next"
                  onClick={nextTestimonial}
                >
                  ›
                </button>
              </div>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? "active" : ""
                      }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
