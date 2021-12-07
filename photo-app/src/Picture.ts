import { Item } from "./Item";
import { PhotoOrientation } from "./PhotoOrientation";

export class Picture extends Item{
    constructor(id: number,
                title: string,
                private _date: string,
                private _orientation: PhotoOrientation) {
        super(id, title); // constructor super clase
    }

    public toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this._orientation}`
    }
}
