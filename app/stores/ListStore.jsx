var AppDispatcher = require('../dispatchers/AppDispatcher.jsx');
var ListConstants = require('../constants/ListConstants.jsx');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var axios = require('axios');

var CHANGE_EVENT = 'change';
var _subredditsList = [];
var _totalPage = 0;
var _getSubredditsList = function() {
    var url = 'http://localhost:3000/api/subreddits/1/30'
    return axios.get(url).then(function(res) {
        _subredditsList = res.data.subreddits;
        ListStore.emitChange();
    });
};
var _getPagination = function() {
    var url = 'http://localhost:3000/api/subreddits/1/30'
    return axios.get(url).then(function(res) {
        _totalPage = res.data.totalPage;
        ListStore.emitChange();
    });
};
var ListStore = assign(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getList: function() {
        return _subredditsList;
    },

    getLastPageNo: function() {
        return _totalPage;
    },

    dispatchersIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType) {
            case ListConstants.GET_LIST:
                _getSubredditsList();
                break;
            case ListConstants.GET_LAST_PAGE_NO:
                _getPagination();
                break;
        }

        return true;
    })
});

module.exports = ListStore;