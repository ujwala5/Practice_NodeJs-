const db = require('../database/db.js');
const todolist_task = async (bodyData) => {
    try {

        let title = bodyData.title;
        let Description = bodyData.description;
        let dueDate = bodyData.due_date;
        let taskCompleted = bodyData.task_completed;
        let created_by = bodyData.created_by;
        let modified_by = bodyData.modified_by;

        let query = "INSERT INTO tb_TodoList(title, description, due_date, task_completed, created_by, modified_by)VALUES('" + title + "','" + Description + "','" + dueDate + "','" + taskCompleted + "','" + created_by + "','" + modified_by + "')";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });
        return result;

    } catch (error) {
        console.log('error', error);
    }
};

const taskListdata = async (bodyData) => {
    try {
        let query = "SELECT * FROM tb_TodoList";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });
        return result;
    } catch (err) {
        console.log("error", err);
    }
};

const getTaskdataById = async (bodyData) => {
    try {
        let Id = bodyData.id;
        let query = "Select * from tb_TodoList WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, field]) => {
                // console.log({ rows });
                return rows;
            });
        return result;
    } catch (err) {
        console.log("error", err);
    }
};

const modifyTaskStatus = async (bodyData) => {
    try {
        let Id = bodyData.id;
        let description = bodyData.description;
        let taskCompleted = bodyData.task_completed;

        let query = "UPDATE tb_TodoList SET description='" + description + "', task_completed='" + taskCompleted + "' where id='" + Id + "'";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });
        return result;
    } catch (err) {
        console.log("error", err);
    }
};

const deleteTask = async (bodyData) => {
    try {

        let Id = bodyData.id;
        let query = "DELETE FROM tb_TodoList WHERE id='" + Id + "'";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });
        return result;

    } catch (err) {
        console.log("error", err);
    }
};

module.exports = {
    todolist_task,
    taskListdata,
    getTaskdataById,
    modifyTaskStatus,
    deleteTask
};