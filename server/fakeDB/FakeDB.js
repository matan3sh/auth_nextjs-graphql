const { portfolios, users } = require('./data');

const Portfolio = require('../database/models/Portfolio');
const User = require('../database/models/User');

class FakeDB {
  async clean() {
    await User.deleteMany({});
    await Portfolio.deleteMany({});
  }

  async add() {
    await User.create(users);
    await Portfolio.create(portfolios);
  }

  async populate() {
    await this.clean();
    await this.add();
  }
}

module.exports = new FakeDB();
