'use strict';
/**
 * @author Katherine Watkins
 * 02/20/2023
 * SDEV 328
 * JS 7 - Private Object
 *
 * User object with three properties: Username, Password, and Age.
 * Username and Password are private fields and cannot be accessed
 * with user.password or user.username
 */

const username = Symbol("username");
const password = Symbol("password");

const myUser = {
    [username]: "KatWatkins",
    [password]: "MyPassWord$3",
    age: 38
}
console.log("Username: " + myUser.username);
console.log("Password: " + myUser.password);
console.log("Age:" + myUser.age);
