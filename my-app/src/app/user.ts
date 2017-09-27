export class User {
    public email:string;
    public password:string;

    constructor(p_email:string, p_password:string) {
        this.email = p_email;
        this.password = p_password;
    }
}
