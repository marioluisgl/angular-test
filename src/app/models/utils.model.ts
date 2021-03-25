import {merge} from 'lodash-es';

export enum EnumTimerType {
    UP = 'UP',
    DOWN = 'DOWN',
}

export enum EnumTimerMode {
    CLOCK = 'CLOCK',
    TIMER = 'TIMER',
    CRONO = 'CRONO'
}

export interface IClockData {
    time: ITime;
    listOfTimes?: ITime[];
}

export class ClockData implements IClockData {
    time: ITime;
    listOfTimes?: ITime[];

    constructor(options?: IClockData) {
        merge(this, this._getDefaults(), options);
    }

    private _getDefaults(): IClockData {
        return {
            time: {
                hour: 0,
                minutes: 0,
                secounds: 0
            },
            listOfTimes: [],
        };
    }
}

export interface ITime {
    hour: number;
    minutes: number | any;
    secounds: number | any;
    ampm?: string;
}

export interface ICronoData {
    time: ITime;
    listOfTimes?: ITime[];
    interval?: any;
    running?: boolean;
}

export class CronoData implements ICronoData {
    time: ITime;
    listOfTimes?: ITime[];
    interval?: any;
    running?: boolean;

    constructor(options?: ICronoData) {
        merge(this, this._getDefaults(), options);
    }

    private _getDefaults(): ICronoData {
        return {
            time: {
                hour: 0,
                minutes: 0,
                secounds: 0
            },
            listOfTimes: [],
            interval: null,
            running: false
        };
    }
}

export interface ITimerData {
    time: ITime;
    listOfTimes?: ITime[];
    interval?: any;
    running?: boolean;
}

export class TimerData implements ITimerData {
    time: ITime;
    listOfTimes?: ITime[];
    interval?: any;
    running?: boolean;

    constructor(options?: ITimerData) {
        merge(this, this._getDefaults(), options);
    }

    private _getDefaults(): ITimerData {
        return {
            time: {
                hour: 23,
                minutes: 59,
                secounds: 59
            },
            listOfTimes: [],
            interval: null,
            running: false
        };
    }
}

