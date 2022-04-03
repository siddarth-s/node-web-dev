import people from './users/users.js';
let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
}

const findUsersByType = (type) => {
    const usersofType = users.filter(obj => obj['type'] === type);
    return usersofType.map(x => x.username);
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