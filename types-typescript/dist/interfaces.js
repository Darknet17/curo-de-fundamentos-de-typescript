"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    return `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`;
}
const showPic = showPicture({
    title: 'Test Title',
    date: '2021-12-3',
    orientation: PhotoOrientation.Landscape,
    // extra: 'test' //Error
});
console.log(showPic);
function generatePicture(config) {
    const pic = { title: 'default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log("picture", picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log("picture", picture);
picture = generatePicture({ title: 'Travel Pic', date: '2021-05' });
console.log("picture", picture);
let user;
user = { id: 10, username: 'jose', isPro: true };
console.log("user", user);
user.username = 'josemaria';
//user.id = 20; // Error
console.log("user", user);
