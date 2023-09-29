import db from '../models/index.js';
const Todo = db.Todo;
const get_todo = async (req, res) => {
    const result = await Todo.findAll();
    res.send(result);
};
const post_todo = async (req, res) => {
    const done = 0;
    const title = req.body.title;
    let result;
    try {
        result = await Todo.create({ title, done });
    } catch (err) {
        console.log(err);
        res.send({ success: 0, errcode: '1', errmsg: 'db에러' });
        return;
    }

    res.send({ success: 1, result: result });
};
const patch_todo = async (req, res) => {
    const { done, title } = req.body;
    const id = req.params.todoId;
    try {
        const result = await Todo.update({ done, title }, { where: { id } });
        console.log(result);
    } catch (err) {
        console.log(err);
        res.send({ success: 0, errcode: '1', errmsg: 'db에러' });
        return;
    }
    res.send({ success: 1 });
};
const delete_todo = async (req, res) => {
    const id = req.params.todoId;
    try {
        const result = await Todo.destroy({ where: { id } });
        console.log(result);
    } catch (err) {
        console.log(err);
        res.send({ success: 0, errcode: '1', errmsg: 'db에러' });
        return;
    }
    res.send({ success: 1 });
};

export default { get_todo, post_todo, patch_todo, delete_todo };
