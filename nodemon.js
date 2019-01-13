module.exports = {
  "verbose": true,
  "ignore": ["public/*", "node_modules/*"],
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": [
    "src/*",
    "test",
  ],
  "ext": "ts js json jsx scss hbs html ejs css sass"
}
