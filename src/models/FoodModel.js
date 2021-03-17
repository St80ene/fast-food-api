import query from './';

class FoodModel {
  constructor(data) {
    this.id = data.id || null;
    this.name = data.name || null;
    this.description = data.description || null;
    this.price = data.price || null;
    this.image = data.image;
    this.createFoodString = `INSERT INTO foods(name, description, price, image) VALUES($1, $2, $3, $4) RETURNING *`;
  }
  async createFood() {
    console.log('brown');
    const payload = [this.name, this.description, this.price, this.image];
    const result = await query(this.createFoodString, payload);

    return result;
  }
}

export default FoodModel;
