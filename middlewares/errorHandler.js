export default function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.staatus || 500).json({
        success: false,
        message: err.message || "Something went wrong."
    });
}

export function notFound(req, res, next) {
    const error = new Error(`Not found - ${req.url}`);
    error.status = 404;
    next(error);
}