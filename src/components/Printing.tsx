import React from "react"


const Printing = () => {

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Do you to publish or print your own brochures and Certificates?</h2>
      <p className="text-lg font-bold mb-3">The printing and publication section is responisble for publishing agricultural techinical handbooks and other publications relevant to the farmer's needs.</p>
      <p className="text-lg font-bold mb-3">The scope of work includes Editorial, Design, Printing, Publication, Sale of books and other print products.</p>
      <h2 className="text-center text-3xl font-bold mb-4 text-green-800 no-underline hover:underline">Our PriceList</h2>
      <div className="flex items-center justify-center mb-4">
        <table className="table-fixed border-separate border border-gray-500 border-spacing-3">
          <thead>
            <tr>
              <td className="border border-gray-500 font-bold">Product/Services Offered</td>
              <td className="border border-gray-500 font-bold">Rate(Ksh)</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="border border-gray-500 font-bold">Printing</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className=" border border-gray-500 text-green-800 font-bold">Brochures per piece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500">500</td>
              <td className="border border-gray-500 font-bold">50.00</td>
            </tr>
            <tr>
              <td className="border border-gray-500">1000</td>
              <td className="border border-gray-500 font-bold">40.00</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="border border-gray-500 text-green-800 font-bold">Business card per piece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500">500</td>
              <td className="border border-gray-500 font-bold">20.00</td>
            </tr>
            <tr>
              <td className="border border-gray-500">1000</td>
              <td className="border border-gray-500 font-bold">15.00</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="border border-gray-500 text-green-800 font-bold">Certificates per piece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500">Digital</td>
              <td className="border border-gray-500 font-bold">70.00</td>
            </tr>
            <tr>
              <td className=" border border-gray-500">1000</td>
              <td className="border border-gray-500 font-bold">70.00</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="border border-gray-500 font-bold text-green-800 ">Books and Booklets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 font-bold">Depends on number of pages,paper,size,stitching e.t.c</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="border border-gray-500 font-bold text-green-800">Poster per piece</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500">A4 1000</td>
              <td className="border border-gray-500 font-bold">40.00</td>
            </tr>
            <tr>
              <td className="border border-gray-500">A3 1000</td>
              <td className="border border-gray-500 font-bold">60.00</td>
            </tr>
            <tr>
              <td className="border border-gray-500 font-extrabold">A4</td>
              <td className="border border-gray-500 font-bold">2000.00</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="border border-gray-500 text-green-800 font-bold">Design- depends on the item</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="border border-gray-500 text-green-800 font-bold">Books for sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500">Livestock Production Manual</td>
              <td className="border border-gray-500 font-bold">1000.00</td>
            </tr>
            <tr>
              <td className="border border-gray-500">Poultry Manual</td>
              <td className="border border-gray-500 font-bold">1000.00</td>
            </tr>
            <tr>
              <td className="border border-gray-500">Appropiate Technology</td>
              <td className="border border-gray-500 font-bold">300.00</td>
            </tr>
            <tr>
              <td className="border border-gray-500">Sericulture</td>
              <td className="border border-gray-500 font-bold">200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )

}



export default Printing;
