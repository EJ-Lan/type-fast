import './styles.css';

class Nav {
    constructor(title ="Type Fast") {
        this.title = title;
    }

    render() {
        const nav = document.createElement('nav');
        nav.className = 'navbar';
        nav.innerHTML = `<div class="navbar-brand">${this.title}</div>`;
        return nav;
    }
}

export default Nav;
