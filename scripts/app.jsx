'use strict';

var React = require('react');
window.React = React;

var Page = require('./components/Page.jsx');

React.render(<Page />, document.getElementById('content'));
