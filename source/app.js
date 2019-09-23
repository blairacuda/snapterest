const React = require('react');
const ReactDom = require('react-dom');

var Application = require('./components/Application.react');

ReactDom.render(<Application/>, document.getElementById('react-application'));
