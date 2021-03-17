import query from './';
import bcrypt from 'bcryptjs';

class UserModel {
  constructor(data) {
    this.id = data.id || null;
    this.email = data.email || null;
    this.name = data.name || null;
    this.password = data.password || null;
    this.passwordHash = null;
    this.createUserString = `INSERT INTO users(email, name, password) VALUES($1, $2, $3) RETURNING id, email, name`;
    this.loginString = `SELECT * FROM users WHERE email=$1`;
    this.getUserString = `SELECT email, name FROM users WHERE id=$1`;
  }

  async hashPassword() {
    this.passwordHash = await bcrypt.hash(this.password, process.env.SALT);
  }

  async isPasswordValid(hash) {
    return bcrypt.compare(this.password, hash);
  }
  async createUser() {
    await this.hashPassword();
    const payLoad = [this.email, this.name, this.passwordHash];
    return query(this.createUserString, payLoad);
  }
  async getUser(isLogin = false) {
    if (isLogin) {
      const data = [this.email];
      const result = await query(this.loginString, data);

      return result.rows.length > 0
        ? this.isPasswordValid(result.rows[0].password)
          ? result.rows[0].id
          : null
        : null;
    } else {
      const data = [this.id];
      console.log(this.id);
      return query(this.getUserString, data);
    }
  }
}

export default UserModel;
