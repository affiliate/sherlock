require.config({
  baseUrl: 'app',
  paths: {
    jquery: 'lib/jquery-2.1.3',
    json: 'lib/json',
    d3: 'lib/d3.min',
    'dagre-d3': 'lib/dagre-d3.min',
    text: 'lib/text',
    lettuce: 'lib/lettuce',
    'jquery.tooltipster': 'lib/jquery.tooltipster.min'
  },
  'shim': {
    'jquery.tipsy': {
      deps: ['jquery']
    },
    'dagre-d3': {
      deps: ['d3']
    }
  }
});

require(['lib/knockout', 'scripts/Skill', 'scripts/render', 'json!../data/example.json'],
  function (ko, Skill, render, example) {
    'use strict';

    render.renderPage(example);

    var vm = new Skill(example);
    ko.applyBindings(vm);
  });
