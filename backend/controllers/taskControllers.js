import TaskModel from "../models/TaskModel.js";

export const getTasks = async (req, res) => {
  const tasks = await TaskModel.find({ user: req.userId });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await TaskModel.create({
    title: req.body.title,
    user: req.userId,
  });

  res.json(task);
};

export const deleteTask = async (req, res) => {
  await TaskModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
