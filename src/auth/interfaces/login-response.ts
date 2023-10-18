import { User } from "../entities/user.entity";

export interface LoginRsponse {
    user: User,
    token: string,
}
