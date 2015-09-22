var React = require('react');
var Header = require('../header/Header.jsx');
var Menu = require('../menu/Menu.jsx');
var ListActions = require('../../actions/ListActions.jsx');
var ListStore = require('../../stores/ListStore.jsx');

var SubredditList = React.createClass({
    getInitialState: function() {
        return {
            lists: ListStore.getList(),
            currentPageNo: 1,
            lastPageNo: ListStore.getLastPageNo()
        }
    },
    componentDidMount: function() {
        ListStore.addChangeListener(this._onChange);
        ListActions.getList();
        ListActions.getLastPageNo();
    },
    componentWillUnmount: function() {
        ListStore.removeChangelistener(this._onChange);
    },
    _onChange: function() {
        this.setState({
            lists: ListStore.getList(this)
        });
        this.setState({
            lastPageNo: ListStore.getLastPageNo(this)
        });
    },
    render: function() {
        var rows  = {},
            lists = this.state.lists.map(function(list, i) {
                return (
                    <div key={i} className="card">
                        <div className="content">
                            <div className="header">{list.display_name}</div>
                        </div>
                    </div>
                )
            }),
            pagination =
                <div className="ui pagination menu">
                  <a className="active item">
                    {this.state.currentPageNo}
                  </a>
                  <div className="disabled item">
                    ...
                  </div>
                  <a className="item">
                    10
                  </a>
                  <a className="item">
                    11
                  </a>
                  <a className="item">
                    {this.state.lastPageNo}
                  </a>
                </div>

        return (
            <div className="ui stackable grid">
                <Header />
                <div className="row noPaddingMenu">
                    <Menu {...this.props} more="location" />
                    <div className="column">
                    </div>
                    <div className="twelve wide column paddingColumn">
                        <div className="ui cards">
                            {lists}
                        </div>
                    </div>
                </div>
                {pagination}
            </div>
        );
    }

});

module.exports = SubredditList;