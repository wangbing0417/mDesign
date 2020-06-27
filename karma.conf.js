module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    client: {
      chai: {
        includeStack: true
      }
    },

    // list of files/patterns to load in the browser
    files: ['dist/**/*.test.js', 'dist/**/*.test.css'],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],

    // web server port
    port: 8888,
    colors: true,
    logLevel: config.LOG_INFO,
    authWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
