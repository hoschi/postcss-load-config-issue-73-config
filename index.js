var prefixer = require('autoprefixer')({
  browsers: ['Explorer >= 11', 'Edge >= 12', 'Firefox >= 34', 'Chrome >= 40', 'Safari >= 9'],
})

module.exports = {
  plugins: [
    prefixer
  ],
};
