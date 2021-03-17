import { fileUpload } from '../helpers/multer';
require('dotenv').config();
import FoodModel from '../models/FoodModel';

class Food {
  // async cloudFile(req, res) {
  //   try {
  //     fileUpload(req.file, (error, result) => {
  //       if (req.file) {
  //         res.status(500).json({
  //           status: 'error',
  //           message: error.message,
  //         });
  //       } else {
  //         res.status(201).json({
  //           data: result,
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       status: 'error',
  //       message: error.message,
  //     });
  //   }
  // }

  async createFood(req, res) {
    try {
      fileUpload(req.body.image, async (error, result) => {
        if (error) {
          res.status(500).json({
            status: 'error',
            message: error.message,
          });
        }
        const foodFile = {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: result,
        };
        const Food = new FoodModel(foodFile);
        const foodData = await Food.createFood();

        res.status(201).json({
          data: foodData.rows[0],
        });
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}
export default new Food();
