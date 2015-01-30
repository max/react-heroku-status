var React = require('react');
var StatusLight = require('./status-light.jsx');

module.exports = React.createClass({
  render: function() {
    var statuses = [];

    for (var prop in this.props.status) {
      statuses.push({statusType: prop, currentStatus: this.props.status[prop]});
    };

    var statusNodes = statuses.map(function(status) {
      return (
        <StatusLight statusType={status.statusType} currentStatus={status.currentStatus} />
      );
    });

    return (
      <div classNames="HerokuStatusList">
        {statusNodes}
      </div>
    );
  }
});
