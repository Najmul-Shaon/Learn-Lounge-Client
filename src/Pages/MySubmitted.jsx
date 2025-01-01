const MySubmitted = () => {
  return (
    <div className="overflow-x-auto container mx-auto my-24">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Sl.</th>
            <th>Title</th>
            <th>Total Marks</th>
            <th>Status</th>
            <th>Obtained Marks</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MySubmitted;
