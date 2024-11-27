import React, { useState } from 'react';
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const App = () => {
    const [state, setState] = useState(0)

    function handleRandom(){
        const randomValue = Math.floor(Math.random() * reviews.length);
        setState(randomValue);
    }
    function handlePrev(){
        if(state > 0){
            setState(state-1);
        }
    }
    function handleNext(){
        if(state < reviews.length-1){
            setState(state+1);
        }
    }
  return (
    <div>
        <h1 id="review-heading">Our Reviews</h1>
        <div className="review">
            <p className='author' id="author-id">{reviews[state].name}</p>
            <p className='job'>{reviews[state].job}</p>
            <p className='info'>{reviews[state].text}</p>
            <img className="person-img" src={reviews[state].image} alt='loading..'/>
        </div>
        <button className='prev-btn' onClick={handlePrev}>Previous</button>
        <button className='next-btn' onClick={handleNext}>Next</button>
        <button className='random-btn' onClick={handleRandom}>surprise me</button>
    </div>
  );
}

export default App;
