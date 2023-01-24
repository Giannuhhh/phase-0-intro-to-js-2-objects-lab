const employee = {
    name: "Stan Marsh",
    streetAddress: "123 Main Street, South Park, CO 80440"

};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}
updateEmployeeWithKeyAndValue(employee, "Zipcode", "80443");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(employee, key) {
    const newObj2 = { ...employee[key] }
    delete newObj2[key]
    return newObj2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
