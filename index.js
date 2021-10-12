const http = require('http');
const mongoose = require("mongoose");
const server = http.createServer();


// On appelle les fichiers cree dans les models
const studentModel = require('./models/student')
const addressModel = require('./models/address')

const address = new addressModel({
    streetName: "Rue de paris",
    streetNumber: "27",
    postCode: "93",
    city: "Bobigny"
})

// address.save()
// .then((newAddress) => {
//     console.log(newAddress);
//     const student = new studentModel({
//         firstname : "Dabatabase",
//         surname: "sofiane",
//         address: newAddress._id
//     })
//     student.save() // A l'interieur de address.save tu sauvegarde 
//     .then(console.log)
//     .catch(console.error)
// })
// .catch(console.error)


// Dans newAddress tu fais findOne pr ciber l'id dans l'id tu fais la jointure et t'ajoute la const address

studentModel.findOne({ _id: "616545b0ffc9b3222bf413c2" })
    // Jointure .populate
    .populate("address")
    // Afficher dans terminale
    .then(console.log)
    .catch(console.error);

// Resultat
// _id: new ObjectId("616545b0ffc9b3222bf413c2"),
// firstname: 'Dabatabase',
// surname: 'sofiane',
// address: {
//   _id: new ObjectId("616545b0ffc9b3222bf413bf"),
//   streetName: 'Rue de paris',
//   streetNumber: '27',
//   postCode: '93',
//   city: 'Bobigny',
//   __v: 0
// },
// __v: 0
















mongoose.connect('mongodb://localhost:27017/populate', (error) => {
    if (error) {
        console.error(error);
        // Process exit permet de quitter l'application 
        process.exit(1)
    }
    console.log('Mongo DB est bien connecté');
});

server.listen(5000, () => {
    console.log("Le port est connecté au " + 5000);
});