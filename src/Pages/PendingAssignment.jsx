const PendingAssignment = () => {
  return (
    <div className="overflow-x-auto container mx-auto my-24">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Title</th>
            <th>Total Marks</th>
            <th>Examinee Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
              <button className="btn btn-outline btn-xs hover:bg-orange-300">
                Give Mark
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PendingAssignment;
