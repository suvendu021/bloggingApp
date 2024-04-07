const AsyncHandler = (fun) => (req, res, next) => {
  return Promise.resolve(fun(req, res, next)).catch((error) =>
    console.log(error)
  );
};
export { AsyncHandler };
