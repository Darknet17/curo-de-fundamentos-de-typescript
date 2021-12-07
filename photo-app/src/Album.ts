import { Item } from "./Item";
import { Picture } from "./Picture";

export class Album extends Item{
    private picture: Picture[];

    public constructor(id: number, title: string) {
        super(id, title); // constructor super clase
        this.picture = [];
    }

    public addPicture(picture: Picture){
        this.picture.push(picture);
    }
}
