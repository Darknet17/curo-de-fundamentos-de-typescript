export {}
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}`
    }
}

class Album {
    id: number;
    title: string;
    picture: Picture[];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.picture = [];
    }

    addPicture(picture: Picture){
        this.picture.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Picture');
const picture: Picture = new Picture(1, 'Session Personal', PhotoOrientation.Landscape);
album.addPicture(picture)
console.log('album', album);
