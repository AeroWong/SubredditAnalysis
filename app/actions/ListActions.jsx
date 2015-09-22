var ListConstants = require('../constants/ListConstants.jsx');
var AppDispatcher = require('../dispatchers/AppDispatcher.jsx');

var ListActions = {
    getList: function() {
        AppDispatcher.handleViewAction({
            actionType: ListConstants.GET_LIST
        })
    },
    getLastPageNo: function() {
        AppDispatcher.handleViewAction({
            actionType: ListConstants.GET_LAST_PAGE_NO
        })
    }
}

module.exports = ListActions;