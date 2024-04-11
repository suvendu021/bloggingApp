const AsyncHandler = (fun) => (req, res, next) => {
  return Promise.resolve(fun(req, res, next)).catch((error) =>
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    })
  );
};
export { AsyncHandler };
