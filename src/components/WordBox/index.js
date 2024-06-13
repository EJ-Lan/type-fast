class WordBox {
    constructor() {
        // Initialize component
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `<div class="word-box">Welcome to WordBox Component</div>`;
        return element;
    }
}

export default WordBox;
