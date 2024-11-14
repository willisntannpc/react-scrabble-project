Here’s the updated README including the live link:

---

# React Scrabble Game

This project is a Scrabble game built with React, featuring an interactive board, score tracking, and animated letter placement. Players can drag and drop letters onto the board, and special tiles such as double and triple word/letter scores are highlighted.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- **`npm start`**  
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page reloads automatically as you make changes, and any lint errors will appear in the console.

- **`npm test`**  
  Launches the test runner in watch mode.

- **`npm run build`**  
  Builds the app for production, optimizing it for best performance by bundling and minifying files in the `build` folder.

- **`npm run eject`**  
  Copies all configuration files and dependencies directly into your project, giving full control over the setup. **Note:** Once you `eject`, you cannot revert this action.

### Features

- **Interactive Board Setup:**  
  Generate 15x15 Scrabble boards with designated special tiles for double and triple word/letter scores. Each board supports different word configurations and animations.

- **Letter Rack and Placement:**  
  Predefined letter racks are displayed for each player, and letters can be animated onto the board with smooth transitions.

- **Special Tiles:**  
  Custom styles and colors mark special tiles such as double/triple word and letter scores, enhancing the gameplay experience.

- **Animations:**  
  Letter tiles move from the rack to the board in animated steps, aligning with Scrabble word placement rules for both horizontal and vertical positioning.

### Project Structure

- **Board Generation:**  
  The `genBoard` function creates and styles the 15x15 Scrabble board for each player. Special tiles (e.g., TW, DW) are color-coded, and a central star tile marks the starting point.

- **Rack Setup and Animation:**  
  `wordRack` generates player racks with letter values displayed. Animated functions `animateWordToBoardHorizontally` and `animateWordToBoardVertically` handle tile movement from racks to the board.

- **Customizable Letter Tiles and Scoring:**  
  Each letter has an assigned score, displayed in the tile's corner. Racks are generated dynamically based on predefined letter arrays.

## Links

- **GitHub Repository:** [React Scrabble Project](https://github.com/willisntannpc/react-scrabble-project/)
- **Live Demo:** [Play the Game](https://react-scrabble-project.vercel.app/)

---

Feel free to contribute or report any issues!