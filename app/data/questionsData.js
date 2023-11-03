const questionsData = [
  {
    question: "What is {name}'s favorite book genre?",
    borderColor: "#c82d44",
    answers: [
      {
        id: 1,
        text: "Mystery",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Fantasy",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Romance",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Science Fiction",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite season of the year?",
    borderColor: "#3d72b5",
    answers: [
      {
        id: 1,
        text: "Spring",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Summer",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Autumn",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Winter",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite dessert?",
    borderColor: "#309961",
    answers: [
      {
        id: 1,
        text: "Chocolate Cake",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Ice Cream",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Apple Pie",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Cheesecake",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite holiday destination?",
    borderColor: "#7646a6",
    answers: [
      {
        id: 1,
        text: "Bali",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Hawaii",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Maldives",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Switzerland",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite color?",
    borderColor: "#ff5733",
    answers: [
      {
        id: 1,
        text: "Blue",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Green",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Red",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Yellow",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite movie genre?",
    borderColor: "#684b98",
    answers: [
      {
        id: 1,
        text: "Action",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Comedy",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Drama",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Horror",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite animal?",
    borderColor: "#22cc88",
    answers: [
      {
        id: 1,
        text: "Dog",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Cat",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Horse",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Bird",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite musical instrument?",
    borderColor: "#db853e",
    answers: [
      {
        id: 1,
        text: "Piano",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Guitar",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Violin",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Drums",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite hobby?",
    borderColor: "#47a8ff",
    answers: [
      {
        id: 1,
        text: "Painting",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Reading",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Cooking",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Gardening",
        isCorrect: false,
      },
    ],
  },
  {
    question: "How many siblings does {name} have?",
    borderColor: "#47a8ff",
    answers: [
      {
        id: 1,
        text: "None",
        isCorrect: false,
      },
      {
        id: 2,
        text: "1",
        isCorrect: false,
      },
      {
        id: 3,
        text: "2",
        isCorrect: false,
      },
      {
        id: 4,
        text: "More than 2",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "If {name} could wake up with a completely different permanent hair color, what would it be?",
    borderColor: "#47a8ff",
    answers: [
      {
        id: 1,
        text: "Blonde",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Brunette",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Red",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Blue",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "If {name} had to eat the same food for dinner every day, what would he/she pick?",
    borderColor: "#47a8ff",
    answers: [
      {
        id: 1,
        text: "Pizza",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Sushi",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Burgers",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Pasta",
        isCorrect: false,
      },
    ],
  },
  {
    question: "How many kids will {name} have?",
    borderColor: "#47a8ff",
    answers: [
      {
        id: 1,
        text: "None",
        isCorrect: false,
      },
      {
        id: 2,
        text: "1",
        isCorrect: false,
      },
      {
        id: 3,
        text: "2",
        isCorrect: false,
      },
      {
        id: 4,
        text: "More than 2",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is {name}'s favorite ice cream flavor?",
    borderColor: "#47a8ff",
    answers: [
      {
        id: 1,
        text: "Chocolate",
        isCorrect: false,
      },
      {
        id: 2,
        text: "Vanilla",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Strawberry",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Mint Chocolate Chip",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "If {name} has one hour to spend 1 million, where do you think he/she'd go first?",
    borderColor: "#47a8ff",
    answers: [
      {
        id: 1,
        text: "Luxury Car Dealership",
        isCorrect: false,
      },
      {
        id: 2,
        text: "High-End Jewelry Store",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Real Estate Office",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Travel Agency for a World Tour",
        isCorrect: false,
      },
    ],
  },
];

export default questionsData;
