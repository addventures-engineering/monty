# Monty: A custom Drupal 9 starter theme with Fluid Typography, Sass, and Gulp

## Installation and Setup

### Installing with Composer

  1. Update your `composer.json` file with the following repository:
      ```
      "addventures-engineering/monty": {
        "type": "vcs",
        "url": "https://github.com/addventures-engineering/monty"
      }
      ```
  2. Run `composer require addventures/monty`


### Installing Manually

  1. Open the Drupal site's `docroot` folder
  2. Clone the Monty repo into the following folder: `<root-directory>/themes/custom/`
    * **NOTE:** You can also download the repo's .ZIP file and unpack it into the above folder
  3. Delete the `.git` folder so that Git does not recognize this as a submodule of the larger site
  4. Run `npm install` to load all node dependencies
  5. For development run `npm run build:dev` to kickoff the Webpack module bundler (does not minify files in dev mode)
  6. To bundle for production run `npm run build:prod` to generate the JS and CSS bundles all minified with sourcemaps


## Fluid Typography
  Monty comes with a baseline implementation of fluid typography out of the box. Customizations can be made in the `_typography.scss` SCSS module. See [Verne Fluid Type](https://www.npmjs.com/package/verne-fluid-type) on npm.com for documentation.
