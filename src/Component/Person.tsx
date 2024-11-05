import React from "react";
import { Iperson } from "../Model/Iperson";

interface PersonData {
  persondata: Iperson;
}

const Person: React.FC<PersonData> = (props: PersonData) => {
  return (
    <>
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {props.persondata.tableDetails.map((res, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                {res.address.map((x, addressIndex) => (
                  <td key={addressIndex}>
                    {x.plot_No}, {x.landMark}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Person;
