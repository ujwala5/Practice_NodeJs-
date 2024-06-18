const { todolist_task, taskListdata, getTaskdataById, modifyTaskStatus, deleteTask } = require("../services/service");

const todoController = async (req, res) => {
    try {

        const bodyData = req.body;
        console.log(bodyData);

        const addtoDoTaskList = await todolist_task(bodyData);
        console.log(addtoDoTaskList);

        res.json({
            code: 200,
            status: "Success",
            message: "Task added Sucssessfully"
        });

    } catch (error) {
        console.log('error', error);
    }
};

const fetchTaskList = async (req, res) => {
    try {
        let taskdata = await taskListdata();
        res.json({
            code: 200,
            status: "Success",
            message: taskdata

        });
    } catch (error) {
        console.log("error =>", error);
    }
};

const fetchTaskList_byId = async (req, res) => {
    try {
        let bodyData = req.body;
        let getTaskData = await getTaskdataById(bodyData);
        res.json({
            code: 200,
            status: "Success",
            message: getTaskData
        });
    } catch (error) {
        console.log("error =>", error);
    }
};

const updateTaskStatus = async (req, res) => {
    try {
        let bodydata = req.body;
        let updateTaskStatusRes = await modifyTaskStatus(bodydata);
        res.send({
            code: 200,
            status: "Success",
            message: "Task updated Successfully",
            data: bodydata
        });
    }
    catch (err) {
        console.log("error", err);
    }
};

const taskDeleted = async (req, res) => {
    try {
        let bodyData = req.body;
        let taskDataDeleted = await deleteTask(bodyData);
        res.json({
            code: 200,
            status: "Success",
            message: "Task deleted successfully "
        });
    } catch (error) {
        console.log("error =>", error);
    }
};
module.exports = {
    todoController,
    fetchTaskList,
    fetchTaskList_byId,
    updateTaskStatus,
    taskDeleted
};