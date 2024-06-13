// Global CSS file
import './global.css';

// Components
import Nav from './components/Nav/index.js';
import Timer from './components/Timer/index.js';
import WordBox from './components/WordBox/index.js';
import TextInput from './components/TextInput/index.js';
import Results from './components/Results/index.js';


// Logic
import GameLogic from './logic/GameLogic';

document.addEventListener('DOMContentLoaded', () => {
   
    // Initialize nav
    const nav = new Nav().render();
    document.body.appendChild(nav);

    // Initialize Game View
    const gameView = document.createElement('div');
    gameView.appendChild(new Timer.render());
    gameView.appendChild(new WordBox.render());
    gameView.appendChild(new TextInput.render());

    // Initialize Results View
    const resultsView = new Results.render();

    // Mount Views to Document
    document.body.appendChild(gameView);
    document.body.appendChild(resultsView);

    // Initialize the game logic
    const gameLogic = new GameLogic();


});