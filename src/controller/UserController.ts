import { Request } from 'express'
import { User } from "../entity/User"
import { BaseController } from "./BaseController"

export class UserController extends BaseController<User>{

    constructor() {
        super(User);
    }

    async createUser(request: Request) {
        let { name, photo, email, isRoot, password, confirmPassword } = request.body;
        super.isRequired(name, 'Informe o nome');
        super.isRequired(photo, 'Informe a foto');
        super.isRequired(email, 'Informe o email');
        super.isRequired(password, 'Informe o senha');
        super.isRequired(confirmPassword, 'Informe a confirmação da senha');

        let _user = new User();
        _user.name = name;
        _user.photo = photo;
        _user.email = email;
        _user.password = password;
        _user.isRoot = isRoot;

        return super.save(_user);

    }

    async save(request: Request) {
        let _user = <User>request.body;
        super.isRequired(_user.name, 'O nome do usuário é obrigatório');
        super.isRequired(_user.photo, 'A foto do usuário é obrigatória');
        super.isRequired(_user.email, 'O email do usuário é obrigatório');
        super.isRequired(_user.password, 'A senha do usuário é obrigatória');

        return super.save(_user);
    }
}