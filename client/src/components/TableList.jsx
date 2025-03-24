import React from "react";

const TableList = () => {
  const employees = [
    {
      id: 1,
      name: "Cy Ganderton",
      email: "Cy@Ganderton.com",
      job: "Quality Control Specialist",
      rate: 100,
      isActive: true,
    },
    {
      id: 2,
      name: "Hart Hagerty",
      email: "Hart@Hagerty.com",
      job: "Desktop Support Technician",
      rate: 105,
      isActive: false,
    },
    {
      id: 3,
      name: "Brice Swyre",
      email: "Brice@Swyre.com",
      job: "Tax Accountant",
      rate: 115,
      isActive: true,
    },
  ];

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="hover:bg-base-300">
          {/* row 1 */}

          {employees.map((employee) => (
            <tr key={employee.id}>
              <th>{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.job}</td>
              <td>{employee.rate}</td>
              <td>
                {employee.isActive ? (
                  <button className="btn btn-primary rounded-3xl">Active</button>
                ) : (
                  <button class="btn btn-outline rounded-3xl">Inactive</button>
                )}
              </td>
              <th>
                <button className="btn btn-success rounded-md">update</button>
              </th>
              <th>
                <button className="btn btn-error rounded-md">Delete</button>
              </th>
            </tr>
          ))}

          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
