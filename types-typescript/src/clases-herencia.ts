export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// SuperClase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    protected constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    set title(title:string){
        this._title = title;
    }
}

// get y set
class Picture extends Item{
    public static photoOrientation = PhotoOrientation;
    // Propiedades
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id, title); // constructor super clase
        this._orientation = orientation;
    }

    get orientation(){
        return this._orientation;
    }

    set orientation(o: PhotoOrientation){
        this._orientation = o;
    }

    public toString(){
        return `[id: ${this.id},
                title: ${this._title},
                orientation: ${this._orientation}`
    }
}

class Album extends Item{
    private picture: Picture[];

    public constructor(id: number, title: string) {
        super(id, title); // constructor super clase
        this.picture = [];
    }

    public addPicture(picture: Picture){
        this.picture.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Picture');
const picture: Picture = new Picture(1, 'Session Personal', PhotoOrientation.Square);
album.addPicture(picture)
console.log('album', album);

// Accediendo a los miembros publicos

console.log("picture.id", picture.id)
// picture.id = 100; // private, set id(100)
picture.title = 'Another title'; // private
album.title = 'Personal Activities'; // private
console.log('album', album);

// Probar el miembro estatico
console.log("PhotoOrientation", Picture.photoOrientation.Landscape);
