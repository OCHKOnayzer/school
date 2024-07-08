const ApiError = require('../exceptions/api-error.js');

module.exports = function(err, req, res, next) {
    if (err instanceof ApiError) {
        const statusCode = err.status || 500;
        return res.status(statusCode).json({message: err.message, errors: err.errors });
    } else {
        return res.status(500).json({ message: 'Непредвиденная ошибка' });
    }
};