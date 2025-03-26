import React from "react";

const TableList = ({ onOpen }) => {
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
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-base-300">
              <th>{employee.id}</th>
              <td className="font-bold">{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.job}</td>
              <td>{employee.rate}</td>
              <td>
                {employee.isActive ? (
                  <button className="btn btn-primary rounded-3xl">
                    Active
                  </button>
                ) : (
                  <button className="btn btn-outline rounded-3xl text-primary text-[12px]">
                    Inactive
                  </button>
                )}
              </td>
              <th>
                {/* 
                    when the update button is click the modal should popup and 
                    show display the data to edit as placeholder on input field
                    and when submitted should update table and keep the order of table
                */}
                <button className="btn btn-success rounded-md" onClick={onOpen}>
                  update
                </button>
              </th>
              <th>
                <button className="btn btn-error rounded-md">Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
