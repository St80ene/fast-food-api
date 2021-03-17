import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.body.token || req.headers['x-access-token'];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRETKEY);
      req.id = decoded.id;
      next();
    } catch (err) {
      res.status(401).json({
        status: 'error',
        message: 'authentication failed',
      });
    }
  } else {
    res.status(401).json({
      status: 'error',
      message: 'Invalid or no token provided',
    });
  }
};
