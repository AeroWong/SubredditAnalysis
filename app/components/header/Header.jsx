var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Header = React.createClass({

    render: function() {
        return (
            <div className="row noPaddingHeader">
                <div className="sixteen wide column">
                    <div className="ui inverted menu RectangleBorder">
                        <Link to="/" className="active item">
                            Home
                        </Link>
                        <div className="item">
                            <div className="ui icon input">
                              <input type="text" placeholder="Search..."></input>
                              <i className="search icon"></i>
                            </div>
                        </div>
                        <div className="right menu">
                            <Link to="/help" className="ui item">
                                Help
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Header;