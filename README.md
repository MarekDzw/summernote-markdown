# summernote-markdown (WIP)

#### Simple "plugin like" button to convert HTML to MD to HTML with options to change in both markup. This project comes with 5 other plugins for summernote. To convert to Markdown I use Turndown.js + GFM Plugin. To convert to HTML I use Showdown.js.

### To get started clone/fork this repo and install all modules by

```
npm install
```

### Then

```
webpack-dev-server
```

### This will run local server on your machine, to visit the site go to [http://localhost:12000/](http://localhost:12000/)

### You can find the "plugin" itself in "src/md.js"

Bundle.js is BIGGGG because there is a lot of stuff like FontAwesome, Bootstrap, JQuery etc. I will remove all those stuff on production but now for me it's easier.
Remember this is work in progress.

## TODO:

- table resize
- better markdown
- fix for firefox
- drag&drop image/s
