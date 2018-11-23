export class Message {
    public name: string;
    public email: string;
    public content: string;

    constructor(name?, email?, content?) {
        this.name = name;
        this.email = email;
        this.content = content;
    }
}