Note: This project is modified version of https://github.com/ruanyf/react-babel-webpack-boilerplate  
I have removed linting and added less support.  
You can see below what changes I made -   
https://github.com/nikhilyeole1/webpack1-less-react/commits?author=nikhilyeole1

This repo is a boilerplate for React-Babel-Webpack project. You could use it as a base to build your own web app.

## Features

- Equip with React, ES6 & Babel 6
- Build with Webpack（support Webpack 1)
- Support [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
- Auto Open a new browser tab when Webpack loads, and reload the page when you modified the code
- Use [Commitizen](https://github.com/commitizen/cz-cli) to produce commit message according to [AngularJS convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
conventional-changelog](https://github.com/ajoslin/conventional-changelog) to generate `CHANGELOG.md`



Install the dependencies.

```bash
$ npm install
```

Then, launch the boilerplate app.

```bash
$ npm start
```

Now you should see a new browser window/tab opening and a title of "Hello World" in http://127.0.0.1:8080.

Last, You need update `package.json` and modify fields like `name`, `version`, `description`, `keywords`, `author`, `license` and so on to fit your project.

From there, you start to develop your own code in the `app` directory. When you finish coding, use `npm run build` or `npm run deploy` to build the static files.


## License

MIT
