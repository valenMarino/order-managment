
import User, {UserMap} from '../models/user.model'
import database from '../database/database';

class UserServices{
    constructor() {
        UserMap(database);
    }
    async getUsers(){
        const result = await User.findAll();
        return result;
    }

    async getUser(id:number){
        const result = await User.findOne({ where:{ id: id }});
        return result;
    }

    async addUser(username:string, password:string, name:string, address:string, phone:string){
        const result = await User.create({username, password, name, 
                       address, phone});
        return result;
    }
}

export default UserServices;