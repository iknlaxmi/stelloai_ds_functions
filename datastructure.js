class Employee {
  constructor(name, role, salary) {
    this.name = name;
    this.role = role;
    this.salary = salary;
    this.directReports = [];
  }
  addDirectReport(employee) {
    this.directReports.push(employee);
  }
}

export default Employee;
