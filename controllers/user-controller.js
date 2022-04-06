import people from './users/users.js';
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users/', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findUsersByType = (type) => {
    const usersofType = users.filter(obj => obj['type'] === type);
    return usersofType.map(x => x.username); //uncomment this line to display without the json
    // return usersofType;
}

const findAllUsers = (req, res) => {

    const type = req.query.type;
    if(type){
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr => usr._id !== userId);
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(usr => usr._id === userId ? updatedUser : usr);
    res.sendStatus(200);
}

export default userController;