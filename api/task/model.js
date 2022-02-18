// build your `Task` model here
const db = require('../../data/dbConfig.js');

async function findAll() {
    const tasks = await db("tasks as t")
      .leftJoin("projects as p", "p.project_id", "t.project_id")
      .select(
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
      );
    tasks.map((t) => {
      if (t.task_completed === 1) {
        t.task_completed = true;
      } else t.task_completed = false;
    });
    return tasks;
  }

  async function getByID(task_id) {
    const task = await db("tasks as t")
      .leftJoin("projects as p", "p.project_id", "t.project_id")
      .select(
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
      )
      .where("task_id", task_id);
    if (task) {
      return task;
    }
  }
  
  async function post(task) {
    const [task_id] = await db("tasks").insert(task);
    const [newTask] = await getByID(task_id);
    if (newTask.task_completed === 0) {
        newTask.task_completed = false;
    } else {
        newTask.task_completed = true;
    }
    return await newTask;
  }
  
  

module.exports = {
    findAll,
    post,
}