import Employee from "./datastructure.js";
export function findMaxNumberOfDirectReports(employee) {
  let maxReports = 0;
  let maxEmployee = null;

  function dfs(emp) {
    if (emp.directReports.length > maxReports) {
      maxReports = emp.directReports.length;
      maxEmployee = emp;
    }
    emp.directReports.forEach(dfs);
  }

  dfs(employee);

  return maxEmployee;
}

export function findCommonManager(ceo, employee1, employee2) {
  function dfs(current) {
    if (!current || current === employee1 || current === employee2) {
      return current;
    }
    let found = 0;
    let result = null;
    for (const report of current.directReports) {
      const res = dfs(report);
      if (res) {
        found++;
        result = res;
      }
    }
    if (found === 2) {
      return current;
    }
    return result;
  }
  return dfs(ceo);
}
