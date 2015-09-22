var React = require('react');
var css = require('!style!css!less!../css/main.less');
var Main = React.createClass({
    render: function() {
        return (
            <div className="main">
                {this.props.children}
            </div>
        );
    }
})

module.exports = Main;