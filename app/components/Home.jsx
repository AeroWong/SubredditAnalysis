var React = require('react');
var $ = require('../lib/jquery.min.js');
window.jQuery = $;
var semantic = require('../lib/semantic.min.js');
var Home = React.createClass({
    componentDidMount: function() {
        $('.ui.selection.dropdown').dropdown();
    },
    render: function() {
        return (
            <div className="ui selection dropdown">
                <input type="hidden" name="gender" />
                <div className="default text">Gender</div>
                <i className="dropdown icon"></i>
                    <div className="menu">
                        <div className="item">New</div>
                    </div>
            </div>
        );
    }

});

module.exports = Home;