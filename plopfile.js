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
                path: 'src/components/{{pascalCase name}}/{{name}}.css',
                templateFile: 'templates/component.css.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{name}}.js',
                templateFile: 'templates/component.js.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/README.md',
                templateFile: 'templates/README.md.hbs'
            }
        ]
    });
};