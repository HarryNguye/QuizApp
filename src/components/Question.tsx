export interface Question {
  id: number;
  questionText: string;
  answerOptions: { answerText: string; isCorrect: boolean }[];
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    questionText: 'What is 2 + 2?',
    answerOptions: [
      { answerText: '3', isCorrect: false },
      { answerText: '4', isCorrect: true },
      { answerText: '5', isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: 'Which country won the FIFA World Cup in 2018?',
    answerOptions: [
      { answerText: 'Brazil', isCorrect: false },
      { answerText: 'Germany', isCorrect: false },
      { answerText: 'France', isCorrect: true },
    ],
  },
  {
    id: 3,
    questionText: 'What is the capital of Canada?',
    answerOptions: [
      { answerText: 'Toronto', isCorrect: false },
      { answerText: 'Ottawa', isCorrect: true },
      { answerText: 'Montreal', isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: 'Who is known as the "King of Football"?',
    answerOptions: [
      { answerText: 'Lionel Messi', isCorrect: false },
      { answerText: 'Pele', isCorrect: true },
      { answerText: 'Cristiano Ronaldo', isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText: 'Which is the largest ocean on Earth?',
    answerOptions: [
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Indian Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: true },
    ],
  },
  {
    id: 6,
    questionText: 'In what year did the first man land on the moon?',
    answerOptions: [
      { answerText: '1965', isCorrect: false },
      { answerText: '1969', isCorrect: true },
      { answerText: '1971', isCorrect: false },
      { answerText: '1975', isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: 'Which element has the chemical symbol "O"?',
    answerOptions: [
      { answerText: 'Gold', isCorrect: false },
      { answerText: 'Oxygen', isCorrect: true },
      { answerText: 'Osmium', isCorrect: false },
      { answerText: 'Oganesson', isCorrect: false },
    ],
  },
    {
      id: 8,
      questionText: 'Which planet is known as the "Red Planet"?',
      answerOptions: [
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Mercury', isCorrect: false },
        { answerText: 'Neptune', isCorrect: false },
      ],
    },
    {
      id: 9,
      questionText: 'What year did the Berlin Wall fall, signifying the end of the Cold War?',
      answerOptions: [
        { answerText: '1982', isCorrect: false },
        { answerText: '1989', isCorrect: true },
        { answerText: '1991', isCorrect: false },
        { answerText: '1995', isCorrect: false },
      ],
    },
    {
      id: 10,
      questionText: 'What is the hardest natural substance on Earth?',
      answerOptions: [
        { answerText: 'Gold', isCorrect: false },
        { answerText: 'Diamond', isCorrect: true },
        { answerText: 'Iron', isCorrect: false },
        { answerText: 'Quartz', isCorrect: false },
      ],
    },
  ];
  