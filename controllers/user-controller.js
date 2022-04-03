import people from './users/users.js';
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
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

export default userController;