const expenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = expenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // Validations
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }
    await expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server error \n", error });
  }

  console.log(expense);
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await expenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error \n", error });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  console.log(req.params, "ID in expense.js");
  expenseSchema
    .findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error \n", error });
    });
};
