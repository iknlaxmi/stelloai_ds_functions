import Employee from "./datastructure.js";
/*Description:finds the employee in an organizational hierarchy 
who has the highest number of direct reports.
-dfs(depth-first search) is a helper function defined with in 'findMaxNumberOfDirectReports'
that performs recursive traversal of the organization tree.
- After the recursive traversal is complete it returns 'maxEmployee',which is the employee with the highest 
number of direct reports found during the traversal.
*/
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

/**
 *
 * Description: To find the lowest common manager of two given employees in an organizational hierarchy.
 */
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
