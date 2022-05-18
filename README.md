# My personal site

This is my personal website. Still WIP. Created using Hugo, TailwindCSS, Alpine.js and love.


## Building locally

To work locally with this project, you'll have to follow the steps below:

- Development: `hugo server`
- Generate the website: `hugo`

Rebuilding the css:

- ``cd themes/site-theme``
- ``npx tailwindcss -i ./styles/styles.css -o ./static/assets/style.css --watch``
