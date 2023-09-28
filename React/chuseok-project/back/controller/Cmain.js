const get_todo = (req, res) => {
    res.json({ data: db });
};
const post_todo = (req, res) => {};
const patch_todo = (req, res) => {};
const delete_todo = (req, res) => {};

module.exports = { get_todo, post_todo, patch_todo, delete_todo };
