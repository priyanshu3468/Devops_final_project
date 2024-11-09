// import React from 'react';
// import './index.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>React App with CI/CD Pipeline</h1>
//       <p>This React app is deployed using Jenkins, Docker, and Kubernetes.</p>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './index.css';

// function App() {
//   // State variables
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);

//   // Fetch data from API on component mount
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setData(data.slice(0, 5))) // Limiting to 5 items for display
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Toggle theme
//   const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

//   return (
//     <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
//       <header>
//         <h1>React App with CI/CD Pipeline</h1>
//         <p>This React app is deployed using Jenkins, Docker, and Kubernetes.</p>
//         <button onClick={toggleTheme}>
//           Switch to {darkMode ? 'Light' : 'Dark'} Mode
//         </button>
//       </header>

//       <section className="counter-section">
//         <h2>Counter</h2>
//         <p>Current Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//       </section>

//       <section className="data-section">
//         <h2>Fetched Data</h2>
//         {data.length > 0 ? (
//           <ul>
//             {data.map((item) => (
//               <li key={item.id}>{item.title}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>Loading data...</p>
//         )}
//       </section>

//       <footer>
//         <p>&copy; 2024 React App</p>
//         <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
//           GitHub
//         </a>
//         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
//           LinkedIn
//         </a>
//       </footer>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const mockData = [
    { id: 1, title: "Set clear goals", description: "Define what you want to achieve each day to stay focused and motivated." },
    { id: 2, title: "Limit distractions", description: "Identify and minimize distractions to improve concentration." },
    { id: 3, title: "Take regular breaks", description: "Short breaks can help recharge your mind and boost productivity." },
    { id: 4, title: "Prioritize tasks", description: "Focus on the most important tasks first for a sense of accomplishment." },
    { id: 5, title: "Practice time blocking", description: "Allocate specific blocks of time for different tasks to stay organized." }
  ];

  useEffect(() => {
    // Simulate fetching data by setting mock data
    setData(mockData);
  }, []);

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  const resetCount = () => setCount(0);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>🌟 React App with CI/CD Pipeline</h1>
        <p>This React app is deployed using Jenkins, Docker, and Kubernetes.</p>
        <button onClick={toggleTheme}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <section className="counter-section">
        <h2>🔢 Counter</h2>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>➕ Increment</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
        <button onClick={resetCount}>🔄 Reset</button>
      </section>

      <section className="data-section">
        <h2>📜 Productivity Tips</h2>
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </section>

      <footer>
        <p>© 2024 React App 🎉</p>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          🌐 GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          💼 LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
