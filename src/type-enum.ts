// Orientacion para Fotografias
// Manera clasica con javascript
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log("landscape",landscape);
console.log("landscape",PhotoOrientation[0]);

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}

console.log("portrait", PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    RepublicaDominicana = 'rd'
}

const country: Country = Country.Colombia;
console.log('Country', country);
