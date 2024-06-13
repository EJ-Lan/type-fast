const path = require('path');

module.exports = function (plop) {
    
    // Component generator
    plop.setGenerator('component', {
        description: 'Create a reusable component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.js',
                templateFile: path.join(__dirname, 'plop-templates', 'component.js.hbs')
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/styles.css',
                templateFile: path.join(__dirname, 'plop-templates', 'styles.css.hbs')
            }
        ]
    });

    // Logic Generator
    plop.setGenerator('logic', {
        description: 'Create a new logic file',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is the name of the logic class?',
            validate: value => {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'src/logic/{{pascalCase name}}.js',
            templateFile: 'plop-templates/logic.js.hbs'
        }]
    });
};