import Layout from '../components/template/Layout';

export default function List() {
  return (
    <div>
      <Layout>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-sm uppercase text-yellow-400 border-b border-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Sliver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}
