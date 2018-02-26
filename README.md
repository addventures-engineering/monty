# Monty: A custom Drupal 8 starter theme with Fluid Typography, Sass, and Gulp

## Installation and Setup

1. Open a Drupal 8 installation directory on your computer
2. Clone the repo into the folder: `<root-directory>/themes/custom/`
3. Rename the folder `monty` to your desired custom theme name
4. Rename the following files to replace `monty` with your custom theme name:
    * `monty.info.yml`
    * `monty.libraries.yml`
    * `monty.theme`

5. Replace the `monty` name used in the following files:
    * `monty.theme` (default function uses `monty_preprocess`)
    * `gulpfile.js` (replace `monty` from all directory references to the name of your custom theme folder)

6. Move the files `gulpfile.js` and `package.json` out of the custom theme folder and into the root folder of your Drupal 8 installation. (e.g. for Acquia sites it would be `/devdesktop/<sitename>/docroot/`)

7. Replace Logo and Favicon in theme root
8. Customize Fluid Typgraphy rhythym in the `_typography.scss` SASS module.