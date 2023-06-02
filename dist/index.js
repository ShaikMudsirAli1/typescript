"use strict";
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function KgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs("10Kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 500;
const Metrics = "";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hole in Type");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map