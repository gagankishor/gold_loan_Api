const State = require('../models/State');
const City = require('../models/City');

const statestore = async (req, res) => {
  try {
    console.log("body", req.body);
    await State.create(req.body);
    res.send({ msg: "data inserted" });
  } catch (error) {
    console.error('Error storing state:', error);
    res.status(500).send({ error: 'An error occurred while storing state.' });
  }
};

const stateindex = async (req, res) => {
  try {
    const data = await State.findAll();
    res.send(data);
  } catch (error) {
    console.error('Error fetching states:', error);
    res.status(500).send({ error: 'An error occurred while fetching states.' });
  }
};

const citystore = async (req, res) => {
  try {
    console.log("body", req.body);
    await City.create(req.body);
    res.send({ msg: "data inserted" });
  } catch (error) {
    console.error('Error storing city:', error);
    res.status(500).send({ error: 'An error occurred while storing city.' });
  }
};

const cityindex = async (req, res) => {
  try {
    const data = await City.findAll();
    res.send(data);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).send({ error: 'An error occurred while fetching cities.' });
  }
};

exports.default = {
  cityindex,
  citystore,
  stateindex,
  statestore,
};
