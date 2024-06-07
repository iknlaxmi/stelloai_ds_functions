import Employee from "./datastructure.js";
import {
  findCommonManager,
  findMaxNumberOfDirectReports,
} from "./functions.js";

// Creating the organizational structure

const ceo = new Employee("Raj", "CEO", 300000);
const cto = new Employee("Jay", "CTO", 250000);
const vpEng = new Employee("Vinu", "VP of Engineering", 200000);
const vpSales = new Employee("Anaya", "VP of Sales", 200000);

const directorEng = new Employee("Dave", "Director of Engineering", 150000);
const directorSales = new Employee("Avidan", "Director of Sales", 150000);

const managerEng = new Employee("Laxmi", "Engineering Manager", 100000);
const managerSales = new Employee("Aarthi", "Sales Manager", 100000);

const engineer1 = new Employee("Vipul", "Engineer", 90000);
const salesRep1 = new Employee("Sony", "Sales Representative", 80000);
const engineer2 = new Employee("Rahul", "Engineer", 90000);
const salesRep2 = new Employee("Harsha", "Sales Representative", 80000);

// Construct the hierarchy
ceo.addDirectReport(cto);
cto.addDirectReport(vpEng);
cto.addDirectReport(vpSales);

vpEng.addDirectReport(directorEng);
vpSales.addDirectReport(directorSales);

directorEng.addDirectReport(managerEng);
directorSales.addDirectReport(managerSales);
managerEng.addDirectReport(engineer1);
managerSales.addDirectReport(salesRep1);
managerEng.addDirectReport(engineer2);
managerSales.addDirectReport(salesRep2);

// Test functions
console.log(findMaxNumberOfDirectReports(ceo)); // Should print Jay (CTO)
console.log(findCommonManager(ceo, engineer1, salesRep2)); // Should print Jay (CTO)
