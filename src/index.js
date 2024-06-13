// Global CSS file
import './global.css';

// Components
import GameUI from './components/GameUI/index.js';
import TextInput from './components/TextInput/index.js';
import Timer from './components/Timer/index.js';

// Logic
import GameLogic from './logic/GameLogic';

document.addEventListener('DOMContentLoaded', () => {
   
    // Create instances of components
    const gameUI = new GameUI();
    const textInput = new TextInput();
    const timer =new Timer();

    // Mount components to DOM
    document.body.appendChild(gameUI.render());
    document.body.appendChild(textInput.render());
    document.body.appendChild(timer.render());

    // Initialize the game logic
    const gameLogic = new GameLogic();


});