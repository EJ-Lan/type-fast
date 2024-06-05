module.exports = function(plop) {
    plop.setGenerator('component', {
        description: 'Generate a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the component:'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'components/{{name}}/{{name}}.css',
                templateFile: 'templates/component.css'
            },
            {
                type: 'add',
                path: 'components/{{name}}/{{name}}.js',
                templateFile: 'templates/component.js'
            },
            {
                type: 'add',
                path: 'components/{{name}}/README.md',
                templateFile: 'templates/README.md'
            }
        ]
    });
};
