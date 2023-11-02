import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single answer.
export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

// Define the type for a single question.
export interface Question {
  id: number;
  question: string;
  borderColor: string;
  answers: Answer[];
}

// Define the state for the questions slice.
export interface QuestionsState {
  questions: Question[];
}

// Initial state for the questions slice.
const initialState: QuestionsState = {
  questions: [],
};

// Create a questions slice.
const questionsInputSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    // Add a new question
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
    },

    // Update a question by ID
    updateQuestion: (
      state,
      action: PayloadAction<{ id: number; updatedQuestion: Question }>
    ) => {
      const { id, updatedQuestion } = action.payload;
      const questionIndex = state.questions.findIndex(
        (question) => question.id === id
      );
      if (questionIndex !== -1) {
        state.questions[questionIndex] = {
          ...state.questions[questionIndex],
          ...updatedQuestion,
        };
      }
    },
  },
});

// Export actions
export const { addQuestion, updateQuestion } = questionsInputSlice.actions;

// Export the reducer
export default questionsInputSlice.reducer;
