import validationCheck from '../helpers/validation';

export const signUpValidation = (req, res, next) => {
  const validatedData = validationCheck({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  if (!validatedData.status) {
    res.status(400).json({
      status: 'error',
      message: validatedData.message,
    });
  } else {
    next();
  }
};

export const logInValidation = (req, res, next) => {
  const validatedData = validationCheck({
    email: req.body.email,
    password: req.body.password,
  });

  if (!validatedData.status) {
    res.status(400).json({
      status: 'error',
      message: validatedData.message,
    });
  } else {
    next();
  }
};
