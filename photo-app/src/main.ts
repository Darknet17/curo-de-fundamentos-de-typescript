import { Album } from "./Album";
import { PhotoOrientation } from "./PhotoOrientation";
import { Picture } from "./Picture";
import { User } from "./User";

const user = new User(1, "luisjose", "Luis", true);
const album = new Album(1, "World Pictures");
const picture = new Picture(1,"TypeScript Course", "2020-12-06", PhotoOrientation.Landscape);

//Creamos Relaciones

user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

// Borramos album
user.removeAlbum(album);
console.log('user', user);
