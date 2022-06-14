const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://ajit:ajit123@cluster0.gvulk.mongodb.net/ERP-System?retryWrites=true&w=majority");
};
