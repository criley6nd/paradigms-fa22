function findUserById(users, id){
    //utilize reduce function to return the user with the 
    //requested id
	return users.reduce((found, user) => {
        if(user.id === id) {
            return user
        }
        return found
    });
}


function computeBMIs(users){
    //uses the map function to create a new array with the BMI's of each person
    return users.map(user => user.weight/(user.height * user.height));
}

var users = [
    {id: 1, name: "Marta", height: 1.74, weight: 59}, 
    {id: 2, name: "Josh", height: 1.80, weight: 88},
    {id: 3, name: "Achilles", height: 1.68, weight: 63}, 
    {id: 4, name: "Julius", height: 1.93, weight: 97},
];

console.log(findUserById(users, 3))
console.log(computeBMIs(users))