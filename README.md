[![Netlify Status](https://api.netlify.com/api/v1/badges/940aae8e-025e-461d-85ff-94b2fbcd26f1/deploy-status)](https://app.netlify.com/sites/dazzling-saha-7834e0/deploys) ![GitHub top language](https://img.shields.io/github/languages/top/roope-kar/rkar-react-components)

# rkar-react-components

Collection of low level, typed and composable react components.

Exposes Tree shakeable esm collection and regular version.

The components can be viewed live in the [storybook app](https://dazzling-saha-7834e0.netlify.app/)

## Getting Started

`npm install @roope-kar/rkar-react-components@1.0.0`

In modern environments, import components from 'esm' to utilize tree shaking:

`import { Button } from 'rkar-react-components/esm'`

Or if you don't care about tree shaking, you can just do:

`import { Button } from 'rkar-react-components`;

## Running the tests

`make test`

### Break down into end to end tests

These tests run headless version of the app and interact with the app like the user would.

To run end to end tests:

`make test:e2e`

### And coding style tests

Code style is checked using eslint. The agreed style follows the default coding style.

`make test:eslint`

## Deployment

The Makefile contains scripts to deploy the app locally in dev and production environment.

To deploy the app locally in dev environment:

`make dev`

Master branch is deployed live to a live location.

## Built With

* [Typescript](https://www.typescriptlang.org/) - Used as the main language
* [React](https://reactjs.org/) - Used to build the user interface
* [StyledComponents](https://styled-components.com/) - To build stylized components
* [Polished](https://polished.js.org/) - To provide the utilities of scss to styled-components
* [Webpack](https://webpack.js.org/) - Used to bundle, shake, split and optimize js, css and other assets
* [Storybook](https://storybook.js.org/) - Used to develop and showcase the components in a sandbox environment
* [Jest](https://jestjs.io/) - Used to test the components

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/roope-kar/rkar-react-components/tags). 

## Authors

* **Roope Karhapää** - *Initial work* - [roope-kar](https://github.com/roope-kar)

See also the list of [contributors](https://github.com/roope-kar/rkar-react-components/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This project is simply for educational purposes.
