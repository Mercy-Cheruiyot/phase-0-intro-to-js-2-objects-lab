// Write your solution in this file!
const employee={name:"Sam", streetAddress:"11 Broadway"}

   function updateEmployeeWithKeyAndValue(employee,key,value){

    const newObj = Object.assign({}, employee, {[key]: value});
    return newObj;
  }
    updateEmployeeWithKeyAndValue;

    function  deleteFromEmployeeByKey(employee, key){
        const employee2 = {...employee};
        delete employee2.name;
        return employee2;
    }
    deleteFromEmployeeByKey;

    function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key]=value;
        key="streetAddress"
        employee.streetAddress="12 Broadway"
        return employee;
        
    }

    function   destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee.name;
        return employee;
    }