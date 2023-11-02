import { configureStore } from "@reduxjs/toolkit";
// ...
import questionsSlice from "@/app/redux/features/questions";
import questionsInputSlice from "@/app/redux/features/inputQuestions";

export const store = configureStore({
  reducer: {
    questions: questionsSlice,
    questionsInput: questionsInputSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
