# My personal website

This is my personal website created using Hugo, TailwindCSS, and Alpine.js. You can visit it at [noahrahm.com](https://noahrahm.com).


## First time

- ``cd themes/site-theme``
- ``npm install`` (first time only)


## Development

To work locally with this project, you'll have to follow the steps below:

- Development: `hugo server`
- Generate the website: `hugo`

Rebuilding the CSS:

- ``cd themes/site-theme``
- ``npx tailwindcss -i ./styles/styles.css -o ./static/assets/style.css --watch``


## Production

- ``cd themes/site-theme``
- ``npx tailwindcss -i ./styles/styles.css -o ./static/assets/style.css --minify``


## License

Website source code is licensed under the MIT license. Posts and images are my own and "all rights reserved".
