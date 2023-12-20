import React from 'react';
import Layout from './layout';

const HomePage: React.FC = () => {
  const mathProblems = [
    { question: '2 + 2', answer: 4 },
    { question: '5 - 3', answer: 2 },
    { question: '4 * 6', answer: 24 },
    { question: '10 / 2', answer: 5 },
  ];

  return (
    <Layout>
      <div>
        <h1>Welcome to the Math Game!</h1>
        <h2>Can you solve these math problems?</h2>
        {mathProblems.map((problem, index) => (
          <div key={index}>
            <p>{problem.question}</p>
            <input type="text" placeholder="Your answer" />
          </div>
        ))}
        <button>Submit</button>
      </div>
    </Layout>
  );
};

export default HomePage;
