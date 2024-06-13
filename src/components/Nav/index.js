import './styles.css';

class Nav {
    // Hard code title into constructor
    constructor(title ="Type Fast") {
        this.title = title;
    }

    render() {
        // Create nav element and add relevant html/styles
        const nav = document.createElement('nav');
        nav.className = 'navbar';
        nav.innerHTML = `<div class="navbar-brand">${this.title}</div>`;
        return nav;
    }
}

export default Nav;
