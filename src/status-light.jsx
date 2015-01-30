var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div classNames="HerokuStatusLight">
        {this.props.statusType}: {this.props.currentStatus}
      </div>
    );
  }
});
