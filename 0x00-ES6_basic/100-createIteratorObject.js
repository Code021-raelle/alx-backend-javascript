export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      // Retrieve the current department and its employees
      const currentDepartment = departments[currentDepartmentIndex];
      const employeesInCurrentDepartment = allEmployees[currentDepartment];

      // Check if there are more employees to iterate over
      if (currentEmployeeIndex < employeesInCurrentDepartment.length) {
        // Return the next employee
        const employee = employeesInCurrentDepartment[currentEmployeeIndex];
        currentEmployeeIndex++;
        return { value: employee, done: false };
      } else {
        // Move to the next department if available
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;

        // Check if there are more departments to iterate over
        if (currentDepartmentIndex < departments.length) {
          const nextDepartment = departments[currentDepartmentIndex];
          const nextEmployees = allEmployees[nextDepartment];
          const nextEmployee = nextEmployees[currentDepartmentIndex];
          currentEmployeeIndex++;
          return { value: nextEmployee, done: false };
        } else {
          return { done: true };
        }
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
