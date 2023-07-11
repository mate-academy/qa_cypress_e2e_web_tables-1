const faker = require('faker');

function generateUser() {
    const firstName = faker.internet.userName();
    const email = faker.internet.email();
    const lastName = faker.name.lastName();
    const randomIndex = Math.floor(Math.random() * 2);
    const age = Math.random().toString().slice(2, 4)
    const salary = Math.random().toString().slice(2, 7)
    const department = ['Insurance', 'Compliance', 'Legal'];
    

    return {
        email,
        firstName,
        lastName,
        age,
        salary,
        department: department[randomIndex],
    

    }
}

module.exports = { generateUser };