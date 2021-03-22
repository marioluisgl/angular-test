import {merge} from 'lodash-es';

export interface IUserModel {
    email?: string;
    password?: string;
    name?: string;
    last_name?: string;
    birth_date?: Date;
    is_logged?: boolean;
    created_at: Date;

    // UI
    views?: number;
}

export class UserModel implements IUserModel {
    email?: string;
    password?: string;
    name?: string;
    last_name?: string;
    birth_date?: Date;
    is_logged?: boolean;
    created_at: Date;

    // UI
    views?: number;

    constructor(options?: IUserModel) {
        merge(this, this._getDefaults(), options);
    }

    private _getDefaults(): IUserModel {
        return {
            email: null,
            password: null,
            name: null,
            last_name: null,
            birth_date: null,
            is_logged: null,
            created_at: new Date(),
            views: null
        };
    }
}

