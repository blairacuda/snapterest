var React = require('react');
var ReactCreateClass = require('create-react-class');

var headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

var Header = ReactCreateClass({
  getDefaultProps: function () { return { text: 'Default header' }; },

  render: function () {
    return (
      <h2 style={headerStyle}>{this.props.text}</h2>
    );
  } 
});

module.exports = Header;