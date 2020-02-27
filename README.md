# Monty: A custom Drupal 8 starter theme with Fluid Typography, Sass, and Gulp

## Installation and Setup

### Installing with Composer

  1. Update your composer.json file with the following repository:
      ```
      "addventures/monty": {
        "type": "vcs",
        "url": "https://github.com/addventures/monty"
      }
      ```
  2. Run `composer require addventures/monty`


### Installing manually

  1. Open a Drupal 8 installation directory on your computer
  2. Clone the repo into the folder: `<root-directory>/themes/custom/`
  3. Run `npm install` to load all node dependencies
  4. For development run `npm run dev` to kickoff webpack module bundler (does not minify during dev mode)
  5. To bundle for production run `npm run build` to generate the JS and CSS bundles all minified with sourcemaps




## Fluid Typography
  Monty comes with a baseline implementation of fluid typography out of the box. Customizations can be made in the `_typography.scss` SCSS module. See [Verne Fluid Type](https://www.npmjs.com/package/verne-fluid-type) on npm.com for documentation.
