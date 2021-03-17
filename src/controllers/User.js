import UserModel from '../models/UserModel';
import jwt from 'jsonwebtoken';

class User {
  async signUp(req, res) {
    try {
      const User = new UserModel(req.body);
      const saveData = await User.createUser();
      res.status(201).json({
        data: saveData.rows[0],
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
  async logIn(req, res) {
    try {
      const User = new UserModel(req.body);
      const id = await User.getUser(true);
      if (id) {
        const loginToken = jwt.sign({ id }, process.env.SECRETKEY);
        res.status(200).json({
          token: loginToken,
        });
      } else {
        res.status(400).json({
          message: 'invalid email or password',
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
  async getUser(req, res) {
    try {
      const User = new UserModel({ id: req.id });
      const result = await User.getUser(false);
      res.status(400).json({
        data: result.rows[0],
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

export default new User();
