import Employee from "./datastructure.js";
import {
  findCommonManager,
  findMaxNumberOfDirectReports,
} from "./functions.js";
// Creating the organizational structure
const ceo = new Employee("Jay", "CEO", 300000);
const cto = new Employee("Sonia", "CTO", 250000);
const vp1 = new Employee("Anaya", "VP", 200000);
const vp2 = new Employee("Avidan", "VP", 200000);
const dir1 = new Employee("Michael", "Director", 150000);
const dir2 = new Employee("Laxmi", "Director", 150000);
const mgr1 = new Employee("Vipul", "Manager", 100000);
const mgr2 = new Employee("Vinu", "Manager", 100000);
const emp1 = new Employee("Sirin", "Employee", 70000);
const emp2 = new Employee("Aarthi", "Employee", 70000);
const emp3 = new Employee("Swati", "Employee", 70000);

// Construct the hierarchy
ceo.addDirectReport(cto);
cto.addDirectReport(vp1);
cto.addDirectReport(vp2);
vp1.addDirectReport(dir1);
vp2.addDirectReport(dir2);
dir1.addDirectReport(mgr1);
dir2.addDirectReport(mgr2);
mgr1.addDirectReport(emp1);
mgr1.addDirectReport(emp3);
mgr2.addDirectReport(emp2);

// Test functions
console.log(findMaxNumberOfDirectReports(ceo)); // Should print Sonia (CTO)
console.log(findCommonManager(ceo, emp3, emp1)); // Should print Jay (CEO)
// console.log(listDirectReports(cto)); // Should list Anaya (VP) and Avidan (VP)
// console.log(listSalaries(vp1)); // Should list [{ name: 'Eve', salary: 150000 }]
// console.log(updateSalary(mgr1, "Ivan", 80000)); // Should return 10000 (change in salary)
