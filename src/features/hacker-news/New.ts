import { NewI } from "./NewsI";

export class New implements NewI {
    creator!: string;
    link!: string;
    title!: string;
    isoDate!: Date
    guid!: string;

    constructor(data?: New | any) {
        Object.assign(this, data);
    }
}