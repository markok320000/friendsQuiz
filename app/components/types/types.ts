export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id?: string;
  question: string;
  borderColor: string;
  answers: Answer[];
}

export interface QuestionsState {
  questionsCount: number;
  currentQuestion: number;
  correctQuestions: number;
  incorrectQuestions: number;
  questions: Question[];
}

export interface RootState {
  questions: QuestionsState;
}
