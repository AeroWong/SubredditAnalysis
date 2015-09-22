var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Menu = React.createClass({
    getInitialState: function(){
        return {
          buttons: {
            home: 'item'
          }
        }
    },
    componentDidMount: function() {
        console.log(this.props.location);
        this.setState({
            buttons: {
                home: 'active item'
            }
        });
    },
    render: function() {
        return (
            <div className="three wide column">
                <div className="ui vertical pointing menu grayMenu">
                    <Link className={this.state.buttons.home} to="/">
                        Homes
                    </Link>
                    <Link className="item" to="/">
                        Homes
                    </Link>
                </div>
            </div>
        );
    }

});

module.exports = Menu;