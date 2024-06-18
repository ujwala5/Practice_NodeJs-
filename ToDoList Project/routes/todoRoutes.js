const express = require('express');
const { todoController, fetchTaskList, fetchTaskList_byId, updateTaskStatus, taskDeleted } = require('../controller/todoController');
const router = express.Router();

router.post('/addTodoTask', todoController);
router.get('/getTaskList', fetchTaskList);
router.get('/getTaskListById', fetchTaskList_byId);
router.put('/modifyTaskStatus', updateTaskStatus);
router.delete('/deleteTask', taskDeleted);

module.exports = router;