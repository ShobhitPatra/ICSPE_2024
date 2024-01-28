import React from "react";

function Registration() {
  return (
    <div>
      <table className="table-auto text-center font-serif p-4   text-md border-separate border">
        <thead>
          <tr>
            <th>Category</th>
            <th>Active IEEE Memnber</th>
            <th>Non IEEE Memnber</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(Author)</td>
            <td>
              <td>INR</td>
              <td>USD</td>
            </td>
            <td>
              <td>INR</td>
              <td>USD</td>
            </td>
          </tr>
          <tr>
            <td>Full time student/research scholar</td>
            <td>
              <td>rs.6000</td>
              <td>$90</td>
            </td>
            <td>
              <td>rs.7000</td>
              <td>$110</td>
            </td>
          </tr>
          <tr>
            <td>Academician</td>
            <td>
              <td>rs.7000</td>
              <td>$110</td>
            </td>
            <td>
              <td>rs.8000</td>
              <td>$125</td>
            </td>
          </tr>
          <tr>
            <td>Industry</td>
            <td>
              <td>rs.9000</td>
              <td>$130</td>
            </td>
            <td>
              <td>rs.10000</td>
              <td>$140</td>
            </td>
          </tr>
          <tr>
            <td>Participants/extra/Authors/Listener</td>
            <td>2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Registration;
