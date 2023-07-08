/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';

// Say Hi to everyone 
console.log("Hello Typescript");

// this user with get type from User class and random name, lat and lng data by faker
const user = new User();
console.log("User info: ", user);

// this company object is get type form Company class and company used faker module to initial data.
const company = new Company();
console.log("Company info: ", company);




