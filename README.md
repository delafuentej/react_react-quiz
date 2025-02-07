# 🚀 React Quiz Application  

**React Quiz Application** is an interactive quiz app designed to test your knowledge of the **React framework**.  
Answer **80 randomly selected questions**, track your score, and challenge yourself with a countdown timer!  

## 🎯 Features  

✅ **80 React-related questions** displayed randomly.  
✅ **Score tracking** to measure your performance.  
✅ **Accuracy percentage** displayed at the end of the quiz.  
✅ **Countdown timer** to make the quiz more engaging.  
✅ **Progress bar** to visualize your progress.  
✅ **Responsive design**, ensuring a smooth experience across devices.  

## 🛠️ Tech Stack  

- **React** (Vite-based project)  
- **React Hooks** (`useReducer`, `useEffect`)  
- **Styled Components & CSS** for design  
- **json-server** (Fake API for quiz questions)  

## 🚀 Getting Started

Follow these steps to set up the project locally:

1️⃣ Clone the repository
```
git clone https://github.com/delafuentej/react_react-quiz.git

cd react-quiz-app
```

2️⃣ Install dependencies

```
npm install
```

3️⃣ Set up the environment variables

Create a .env file in the root directory and specify the API endpoint:

```
REACT_APP_API_ENDPOINT=http://localhost:PORT/questions

```

You can check .env.template for reference.

4️⃣ Start the fake API server

The quiz pulls questions from a json-server. Start the server using:
```
npm run server
```


5️⃣ Start the React app

```
npm start
```

Now, open http://localhost:3000 to access the quiz! 🚀
