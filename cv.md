# Petrushevskiy Maksim

## Contacts

-   **Discord:** - ```@petrushevskiyMaksim```
-   **Telegram:** - ```@PetrushevskiyMaxim```
-   **Gmail:** - <6atbko89@gmail.com>

## About me

_I'm someone who gets genuinely excited when code actually works_

_A few months ago, I decided to really understand how modern frontend development works — not just tutorials, but building something real. That something became full-case — a project that started simple but turned into my playground for everything **`React`**, **`TS`**, **`Redux`**, **`testing`**, and all the tools that make professional development what it is_

### My goal:

_To contribute to real-world projects as a frontend developer, continuously improve my skills, and write clean, efficient, and testable code_

### My strengths:

-   Understanding of modern **React** ecosystem and **TypeScript**
-   Experience with professional development tools and workflows (**Webpack**, **Vite**, **ESLint**, **Storybook**)
-   Commitment to code quality through testing (**Unit**, **Component**, **E2E**) challenges
-   Ability to work with complex architectures (**Feature Sliced Design**)

### What I learned along the way:

> That architecture matters (Feature Sliced Design changed how I think about code)

> That tests are actually friends, not enemies (took me a while to accept this)

> That breaking things is the fastest way to learn

### My experience:

_I have developed a full-scale production-ready application [full-case](https://github.com/petrushevskiyMaksim/full-case.git) – a complex **React** + **TS** project that demonstrates my ability to work with modern frontend technologies_

### My aspirations:

**_I'm looking for a team where I can contribute, ask stupid questions, and gradually become a developer others can count on_**

## Skills:

-   **HTML**
-   **CSS, CSS Preprocessor SCSS (Sass), CSS Modules**
-   **React + TypeScript**
-   **Webpack + Vite**
-   **Redux Toolkit + RTK Query**
-   **Jest + React Testing Library**
-   **Cypress (e2e tests)**
-   **Storybook + Chromatic**
-   **ESLint + Stylelint + Custom ESLint Plugin**
-   **Feature Sliced Design (FSD)**
-   **i18next (i18n)**
-   **GitHub Actions (CI/CD)**
-   **Pre-commit hooks**
-   **EntityAdapter (from Redux Toolkit), DynamicModuleLoader**

## Code example

```
import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';  
import { StateSchema } from '@/app/providers/StoreProvider';  
import { Commentary } from '@/entities/Comment';  
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';  
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Commentary>({});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
(state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
name: 'articleDetailsCommentsSlice',
initialState: commentsAdapter.getInitialState({
isLoading: false,
error: undefined,
ids: [],
entities: {},
} as ArticleDetailsCommentsSchema),
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchCommentsByArticleId.pending, (state) => {
state.error = undefined;
state.isLoading = true;
})

            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Commentary[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                }
            )

            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { reducer: articleDetailsCommentsReducer } =
articleDetailsCommentsSlice;
```

## Education 

> Education in development came through ***`practice`***, reading official documentation of the necessary technologies, and watching training videos

## English

*I started learning English not long ago, reaching level B1.
I studied mainly using [Lingualeo](https://lingualeo.com/ru/dashboard) and [Duolingo](https://www.duolingo.com/learn)*
