export class User {
    public login:string;
    public password:string;

    constructor(p_login:string, p_password:string) {
        this.login = p_login;
        this.password = p_password;
    }
}
