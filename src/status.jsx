var React = require('react');
var HerokuStatusList  = require('./status-list.jsx');

var HerokuStatus = React.createClass({
  getInitialState: function() {
    return JSON.parse('{"status":{"Production":"green","Development":"green"},"issues":[]}');
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://status.heroku.com/api/v3/current-status', true);
    request.send();

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        this.setState(JSON.parse(request.responseText));
      }
    }.bind(this);
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
