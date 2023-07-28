const { GoldLoan } = require('../models/Goldloan'); // Replace '../models' with the correct path to your Sequelize models folder

const store = async (req, res) => {
  try {
    console.log("body", req.body);
    await GoldLoan.create(req.body);
    res.send({ msg: "data inserted" });
  } catch (error) {
    console.error('Error storing Goldloan data:', error);
    res.status(500).send({ error: 'An error occurred while storing Goldloan data.' });
  }
};

const index = async (req, res) => {
  try {
    const data = await GoldLoan.findAll();
    res.send(data);
  } catch (error) {
    console.error('Error fetching Goldloan data:', error);
    res.status(500).send({ error: 'An error occurred while fetching Goldloan data.' });
  }
};

const onedata = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await GoldLoan.findByPk(id);
    res.send(data);
  } catch (error) {
    console.error('Error fetching Goldloan data:', error);
    res.status(500).send({ error: 'An error occurred while fetching Goldloan data.' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await GoldLoan.update(data, { where: { id } });
    res.send({ msg: "data updated" });
  } catch (error) {
    console.error('Error updating Goldloan data:', error);
    res.status(500).send({ error: 'An error occurred while updating Goldloan data.' });
  }
};

exports.default = {
  index,
  store,
  onedata,
  update
};
