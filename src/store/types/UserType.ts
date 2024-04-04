export class User {
  username: string;
    password: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  }
export class Token {
    token: string;
    constructor(token: string) {
      this.token = token;
    }
  }

export interface UserType {
    user: User;
    Token:Token;
}


