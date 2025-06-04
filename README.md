# 🌌 Rick and Morty Universe Explorer 🚀

Explore the vast universe of Rick and Morty with this interactive character browser! Discover your favorite characters, search for new ones, and dive deep into their origins and episodes.

## ✨ Features

- **Search Characters:** 🔎 Find your favorite characters by name.
- **Browse Pages:** 📄 Navigate through multiple pages of characters.
- **Character Details:** ℹ️ View detailed information about each character, including status, species, origin, and location.
- **Responsive Design:** 📱 Enjoy a seamless experience on any device.
- **Error Handling:** 🚨 Graceful error messages for API issues.
- **Loading State:** ⏳ Know when data is loading with a sleek loading indicator.

## 🛠️ Installation

Get the project up and running locally with these simple steps:

- **Clone the Repository:**
  ```bash
  git clone <repository-url>
  ```
- **Navigate to the Project Directory:**
  ```bash
  cd rickandmorty
  ```
- **Install Dependencies:**
  ```bash
  npm install
  ```
- **Start the Development Server:**
  ```bash
  npm run dev
  ```
  Open your browser and visit `http://localhost:5173` to see the app in action!

## 🚀 Usage

1.  **Search for Characters:**

    - Enter a character's name in the search bar to filter results.

2.  **Navigate Pages:**

    - Use the "Previous" and "Next" buttons to browse through different pages of characters.

3.  **View Character Details:**
    - Each character card displays essential information like status, species, origin, and last known location.

```jsx
import React, { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
};

export default App;
```

## ⚙️ Technologies Used

| Technology   | Description                                                                                        | Link                                                       |
| :----------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| React        | JavaScript library for building UIs                                                                | [https://react.dev/](https://react.dev/)                   |
| Vite         | Build tool that aims to provide a faster and leaner development experience for modern web projects | [https://vitejs.dev/](https://vitejs.dev/)                 |
| JavaScript   | Programming language                                                                               | [https://www.javascript.com/](https://www.javascript.com/) |
| ESLint       | JavaScript linter                                                                                  | [https://eslint.org/](https://eslint.org/)                 |
| lucide-react | Beautifully simple icons                                                                           | [https://lucide.dev/](https://lucide.dev/)                 |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🧑‍Author

**Jhay**

- [Placeholder X (Twitter)](Your Twitter Profile)
- [Placeholder GitHub](Your Github Profile)
