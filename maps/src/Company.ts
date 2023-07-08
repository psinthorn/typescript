import { faker } from "@faker-js/faker";

export class Company {
    // create data types
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    // user constructor to initial data
    constructor() {
        this.companyName  = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location =  {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    };

};