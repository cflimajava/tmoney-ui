export class Expense{

    constructor(
        public id?: string,
        public date?: Date,
        public amount?: number,
        public typeId?: number,
        public description?: string
    ){}
}