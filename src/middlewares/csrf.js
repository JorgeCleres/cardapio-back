exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.send('404');
    }
}

exports.csrMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}