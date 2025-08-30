export default function (err, req, res, next) {
    console.log(err.stack);
    // log error in log.txt if staus is not present in the error object

    res.status(err.status || 500).json({
        success: false,
        message: (err.status) ? err.message : "Something went wrong."
    });
}

export function notFound(req, res, next) {
    const error = new Error(`Not found - ${req.url}`);
    error.status = 404;
    next(error);
}