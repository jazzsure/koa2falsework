const index = require("./indexController.js");
const initController = {
    init(app,router) {
        app.use(router(_ => {
            _.get('/', index.render())
        }));
    }
}
module.exports = initController;