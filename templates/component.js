// components/{{name}}/{{name}}.js
import Handlebars from 'handlebars';

const template = Handlebars.compile(`
<div class="{{name}}">
    <!-- Your component HTML here -->
</div>
`);

export default class {{name}}Component {
    constructor(data) {
        this.data = data;
    }

    render() {
        // Render your template
    }
}
