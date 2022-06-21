import Quiz from './Components/Quiz';
import './App.css';

const QUESTIONS = [
  {
    question: 'What is 2*(4+4)?',
    answers: ['2', '4', '8', '16'],
    correct: 3,
  },
  {
    question: 'What is the default port number in which the application run ?',
    answers: ['8080', '3000', '5000', '3030'],
    correct: 1,
  },
  {
    question: 'Which of the following command is used to create react-js-app ?',
    answers: [
      'npx create-react-app my-app',
      'npm install create react app',
      'npx create-react-app -g',
      'npx create-react-app',
    ],
    correct: 0,
  },
  {
    question: 'In React.js which one of the following is used to create a class for Inheritance ?',
    answers: ['Create', 'Extends', 'Inherits', 'Delete'],
    correct: 1,
  },
  {
    question: 'What are the two major political parties in the United States?',
    answers: [
      'Democratic Party & Republican Party',
      'Green Party & Red Party',
      'Bull Party & Moose Party',
      'Hamilton Party & Burr Party',
    ],
    correct: 0,
  },
];

function App () {
  return (
    <div>

      <Quiz questions={QUESTIONS} />
    </div>
  );
}

export default App;
