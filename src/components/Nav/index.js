class Nav {
    constructor() {
        // Initialize component
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `<div class="nav">Welcome to Nav Component</div>`;
        return element;
    }
}

export default Nav;
