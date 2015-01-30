var React = require('react');
var HerokuStatusList  = require('./status-list.jsx');

var HerokuStatus = React.createClass({
  getInitialState: function() {
    return {status: {production: "green", development: "green"}};
  },

  render: function() {
    return (
      <div classNames="HerokuStatus">
        <HerokuStatusList status={this.state.status} />
      </div>
    );
  }
});

React.render(<HerokuStatus />, document.querySelector('#app'));
