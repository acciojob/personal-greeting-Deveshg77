
import React, { useState } from 'react';

function Greeting() {

  const [name, setName] = useState('');
 
  const [greeting, setGreeting] = useState('');


  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    setGreeting(`Hello, ${name}!`); // Update the greeting state
  };

  return (
    <div>
      <h1>Personalized Greeting</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default Greeting;
