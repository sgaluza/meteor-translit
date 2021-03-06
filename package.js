Package.describe({
  name: 'sgaluza:translit',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'Transliteration for Meteor using ru.wikipedia.org/wiki/ISO_9 rules.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sgaluza/meteor-translit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.addFiles('translit.js');
  api.export('translit');
});