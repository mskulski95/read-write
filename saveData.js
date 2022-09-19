const fs = require('fs');
const path = require('path');

function saveData(filePath, outputFolderName, overWrite) {
    console.log(path.join(__dirname, filePath));
    fs.readFile(path.join(__dirname, filePath), function (err, file) {
        if (err) {
            console.log(err);
        } else {
            console.log(JSON.parse(file));

            let userData = JSON.parse(file);

            fs.mkdir(path.join(__dirname, outputFolderName), function (err) {
                if (err) {
                    if (err.code === 'EEXIST' && overWrite) {
                        userData.forEach(function (user) {
                            // console.log(user.phone);
                            let idName = user.id;
                            let fName = user.name.split(' ')[0];
                            let sName = user.name.split(' ')[1];
                            let streetName = user.address.street;
                            let zipcodeName = user.address.zipcode;
                            let cityName = user.address.city;
                            let phoneNumber = user.phone;
                            fs.writeFile(path.join(__dirname, outputFolderName, idName + '-' + fName + '-' + sName), ['Name: ' + fName + '\n' + 'Surname: ' + sName + '\n' + 'Street: ' + streetName + '\n' + 'Zip Code: ' + zipcodeName + 'City: ' + cityName + '\n' + 'Phone: ' + phoneNumber].toString(), function (err) {
                                if (err) {
                                    console.log(err);
                                }
                            })
                        })
                        console.log('Folder już istnieje');
                        return;
                    } else if (err.code === 'EEXIST') {
                        console.log('Folder już istnieje');
                        return;
                    }
                    console.log(err);
                } else {
                    console.log('Stworzono folder');
                    userData.forEach(function (user) {
                        // console.log(user.phone);
                        let idName = user.id;
                        let fName = user.name.split(' ')[0];
                        let sName = user.name.split(' ')[1];
                        let streetName = user.address.street;
                        let zipcodeName = user.address.zipcode;
                        let cityName = user.address.city;
                        let phoneNumber = user.phone;
                        fs.writeFile(path.join(__dirname, outputFolderName, idName + '-' + fName + '-' + sName), ['Name: ' + fName + '\n' + 'Surname: ' + sName + '\n' + 'Street: ' + streetName + '\n' + 'Zip Code: ' + zipcodeName + 'City: ' + cityName + '\n' + 'Phone: ' + phoneNumber].toString(), function (err) {
                            if (err) {
                                console.log(err);
                            }
                        })
                    })
                }
            });


        }
    })
}


module.exports = { saveData };