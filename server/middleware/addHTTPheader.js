const addHTTPHeader = (req, res, next) => {
    res.setHeader('Quiz', '2024');
    next()
}

module.exports = addHTTPHeader;