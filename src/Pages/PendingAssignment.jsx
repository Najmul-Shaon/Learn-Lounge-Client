import { useLoaderData } from "react-router-dom";

const PendingAssignment = () => {
  const pendingAssignments = useLoaderData();
  console.log(pendingAssignments);
  return (
    <div className="overflow-x-auto container mx-auto my-24">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th className="text-base font-semibold border text-center">Sl.</th>
            <th className="text-base font-semibold border text-center">
              Title
            </th>
            <th className="text-base font-semibold border text-center">
              Total Marks
            </th>
            <th className="text-base font-semibold border text-center">
              Examinee Name
            </th>
            <th className="text-base font-semibold border text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {pendingAssignments.map((pendingAssignment, i) => (
            <tr key={pendingAssignment._id}>
              <th className="text-base border text-center">{i + 1}</th>
              <td className="text-base border text-center">
                {pendingAssignment?.title}
              </td>
              <td className="text-base border text-center">
                {pendingAssignment?.marks}
              </td>
              <td className="text-base border text-center">
                {pendingAssignment?.name}
              </td>
              <td className="text-base border text-center">
                <button className="btn btn-outline btn-xs hover:bg-orange-300">
                  Give Mark
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingAssignment;
