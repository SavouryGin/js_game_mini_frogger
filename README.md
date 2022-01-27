# MINI FROGGER

[Frogger](https://en.wikipedia.org/wiki/Frogger) is a classic arcade game developed by Konami and originally published by Sega. The object of the game is to direct frog to its homes by crossing a busy road.

## Game Rules
1. Pokemon starts on the grass, it needs to get to the water and not be caught in the Pokeball.
2. Control the Pokemon with buttons and avoid collisions with flying Pokeballs.
3. If the Pokemon reaches the water, you will receive one point.
4. If you can collect a star, then you get three extra points.
5. The goal is to accumulate as many points as possible.
6. If the Pokémon is caught, you will lose all accumulated points.
7. Press Space to pause the game.

# Webpack 5 Boilerplate

## Requirements

* `node` : `^10 || ^12 || >=14`
* `npm`

## Build Assets

### One time build assets for development

```sh
$ npm run build
```

### Build assets and enable source files watcher

```sh
$ npm run watch
```

This command is suitable if you develop with external web server.

*Note:* Watching does not work with *NFS* (*Windows*) and machines in *VirtualBox*. 
Extend the configuration in such cases by:

```js
module.exports = {
  //...
  watchOptions: {
    poll: 1000 // Check for changes every second
  }
};
```

### Start a development server - reloading automatically after each file change.

```sh
$ npm run dev
```

## Production / Build Assets

* Optimize assets for production by:

```sh
$ npm run production
```

## Processed Built Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6 / ECMAScript 2016(ES7)_ files are located under `/dist/js/`
* _Images_ are located under `/dist/images/`
  * Images part of the _design_ (_usually referenced in the CSS_) are located under `/dist/images/design/`
  * Images part of the _content_ (_usually referenced via `<img>` tags_) are located under `/dist/images/content/`
* _Fonts_ are located under `/dist/fonts/`
* _HTML_ files are located under `/dist/`

## Run Code Style Linters

* **SASS**

```sh
$ npm run lint:sass
```
* **JS**

```sh
$ npm run lint:js
```
