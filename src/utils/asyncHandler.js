const asyncHandler = (requestHanlder) => {
  return (req, res, next) => {
    Promise.resolve(requestHanlder(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// less better approach but same this is more hard i mean syntax wise
// const asyncHandler = (fn) => (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     } catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// };
