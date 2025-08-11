export default function JadwalKelas() {
  return (
    <div className="min-h-[50vh] text-white p-4 ">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-white border-collapse text-center text-sm [&_td]:border [&_th]:border [&_td]:border-white [&_th]:border-white">
          <thead>
            <tr className="bg-black">
              <th className="border px-2 py-2">Time</th>
              <th className="border px-2 py-2">Mon</th>
              <th className="border px-2 py-2">Tue</th>
              <th className="border px-2 py-2">Wed</th>
              <th className="border px-2 py-2">Thu</th>
              <th className="border px-2 py-2">Fri</th>
              <th className="border px-2 py-2">Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-2">8:00am</td>
              <td></td>
              <td className="border px-2 py-2 bg-gray-800">
                <p className="font-bold">HIIT The Cliff</p>
                <p>8:00am - 9:00am</p>
              </td>
              <td></td>
              <td className="border px-2 py-2 bg-gray-800">
                <p className="font-bold">HIIT The Cliff</p>
                <p>8:00am - 9:00am</p>
              </td>
              <td className="border px-2 py-2 bg-gray-800">
                <p className="font-bold">HIIT The Cliff</p>
                <p>8:00am - 9:00am</p>
              </td>
              <td></td>
            </tr>

            <tr className="h-16">
              <td className="border px-2 py-2 align-middle">9:00am</td>
              {[...Array(6)].map((_, index) => (
                <td key={index} className="border px-0 py-0 align-middle">
                  <div className="h-[15vh] w-full flex flex-col">
                    <div className="flex-1 bg-orange-200 text-black text-[10px] flex flex-col justify-center items-center">
                      <p className="font-bold leading-tight m-0">Hot Pilates</p>
                      <p className="leading-tight m-0">9:00am - 10:00am</p>
                    </div>
                    <div className="flex-1 bg-blue-900 text-white text-[10px] flex flex-col justify-center items-center">
                      <p className="font-bold leading-tight m-0">
                        {index % 2 === 0 ? 'Hard Beat' : 'Stronger – Surf Strength'}
                      </p>
                      <p className="leading-tight m-0">9:00am - 10:00am</p>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            <tr>
              <td className="border px-2 py-2">10:00am</td>
              <td className="border px-2 py-2 bg-amber-800">
                <p className="font-bold">Booty</p>
                <p>10:00am - 11:00am</p>
              </td>
              <td></td>
              <td className="border px-2 py-2 bg-amber-800">
                <p className="font-bold">Booty</p>
                <p>10:00am - 11:00am</p>
              </td>
              <td></td>
              <td className="border px-2 py-2 bg-amber-800">
                <p className="font-bold">Booty</p>
                <p>10:00am - 11:00am</p>
              </td>
              <td></td>
            </tr>

            <tr>
              <td className="border px-2 py-2">1:00pm</td>
              <td className="border px-2 py-2 bg-blue-900">
                <p className="font-bold">Stronger – Surf Strength</p>
                <p>1:00pm - 2:00pm</p>
              </td>
              <td className="border px-2 py-2 bg-sky-500">
                <p className="font-bold">Body Control – Surf Mobility</p>
                <p>1:00pm - 2:00pm</p>
              </td>
              <td className="border px-2 py-2 bg-blue-900">
                <p className="font-bold">Stronger – Surf Strength</p>
                <p>1:00pm - 2:00pm</p>
              </td>
              <td className="border px-2 py-2 bg-sky-500">
                <p className="font-bold">Body Control – Surf Mobility</p>
                <p>1:00pm - 2:00pm</p>
              </td>
              <td className="border px-2 py-2 bg-blue-900">
                <p className="font-bold">Stronger – Surf Strength</p>
                <p>1:00pm - 2:00pm</p>
              </td>
              <td></td>
            </tr>

            <tr>
              <td className="border px-2 py-2">5:00pm</td>
              <td></td>
              <td className="border px-2 py-2 bg-yellow-400 text-black">
                <p className="font-bold">Surf Motion</p>
                <p>5:00pm - 6:00pm</p>
              </td>
              <td></td>
              <td className="border px-2 py-2 bg-yellow-400 text-black">
                <p className="font-bold">Surf Motion</p>
                <p>5:00pm - 6:00pm</p>
              </td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td className="border px-2 py-2">6:00pm</td>
              <td className="border px-2 py-2 bg-blue-900">
                <p className="font-bold">Stronger – Surf Strength</p>
                <p>6:00pm - 7:00pm</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td className="border px-2 py-2 bg-blue-900">
                <p className="font-bold">Stronger – Surf Strength</p>
                <p>6:00pm - 7:00pm</p>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
