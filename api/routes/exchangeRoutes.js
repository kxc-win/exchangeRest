'use strict';
module.exports = function(app) {
    var exchangeController = require('../controllers/exchangeController');

    app.route('/fetchTicker')
        .get(exchangeController.fetchTicker)
        .post(exchangeController.fetchTicker);

    app.route('/fetchTicker/:ex/:token1/:token2')
        .get(exchangeController.fetchTicker)
        .post(exchangeController.fetchTicker);


    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);

};
