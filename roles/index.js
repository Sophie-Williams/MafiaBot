var roles = [];
require('fs').readdirSync(__dirname + '/').forEach(file => {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    roles.push(require('./' + file));
  }
});
module.exports = roles;