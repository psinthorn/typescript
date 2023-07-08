import { faker } from "@faker-js/faker"



export class User {
    name: string;
    localtion: {
        lat: number;
        lng: number;
    };

// use construcotr to initial data to User classs
constructor() {
    this.name = faker.person.firstName();
    this.localtion = {
        lat: faker.location.latitude({max: 10, min: -10}),
        lng: faker.location.longitude({max: 10, min: -10})
     }
    }
}   