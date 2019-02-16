module.exports = {
  loadPlugin: function() {
    module.exports = Object.assign(module.exports, {
      'migrator:migration:hook:require': function() {
        require('@babel/register')({ extensions: ['.ts'] });

        return { extensions: 'ts' };
      }
    });

    delete module.exports.loadPlugin;
  },
  name: 'babel-typescript',
  hooks: [
    'migrator:migration:hook:require'
  ]
};
