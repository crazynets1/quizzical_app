# Quizzical App
Quizzical is a React-based quiz application that fetches trivia questions from the Open Trivia Database API and presents them to users in a multiple-choice format.

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Fetches 5 random quiz questions from an external API.
- Dynamically shuffles the correct answer among the incorrect answers for each question.
- Renders each question with multiple-choice radio buttons.
- Allows users to check their answers and displays their score.
- Responsive and user-friendly interface.

## Project Structure

```
quizzical_app/
├── public/
│   ├── index.html
│   └── ... (favicon, manifest, etc.)
├── src/
│   ├── App.js        # Main React component with quiz logic and rendering
│   ├── App.css       # Styles for the app
│   ├── index.js      # Entry point for React
│   └── index.css     # Global styles
├── package.json
└── README.md
```

## How It Works

- On load, the app fetches 5 quiz questions from the Open Trivia Database API.
- For each question, the correct answer is inserted at a random position among the incorrect answers.
- Each question and its possible answers are displayed as radio inputs with labels.
- Users can select answers and check their score.

## Available Scripts

In the project directory, you can run:

## Scripts

- `npm start` — Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npm run build` — Builds the app for production.
- `npm test` — Runs tests (if any are added).

## Customization

- You can change the number of questions by modifying the API URL in `App.js`.
- Styles can be updated in `App.css` and `index.css`.

## Dependencies

- React
- html-entities (for decoding HTML entities in questions/answers)

## Credits

- Trivia questions provided by [Open Trivia Database](https://opentdb.com/).
