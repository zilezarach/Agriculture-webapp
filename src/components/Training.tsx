

const Training = () => {

  return (

    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Do you want to extend your knowledge in various fields related to Agriculture?</h1>
      <p className= "text-lg font-bold mb-4">The Center Offers training on short development courses in Extension Management and communication,this courses are talior-made and are conducted at the center or other venues and on dates convenient to clients.</p>
      <p className="text-lg mb-4 font-bold mb-4">The Center also offers Accommodation and hiring of it's conference facilities to clients.</p>
      <h2 className="text-center no-underline hover:underline text-3xl font-bold text-green-800">Our PriceList</h2>
      <div className=" flex items-center justify-center min-h-screen">
            <table className= "table-fixed border-separate border border-gray-500 border-spacing-3">

              <thead>
                <tr>
                  <th className="border border-gray-500">Item</th>
                  <th className="border border-gray-500">Description</th>
                  <th className="border border-gray-500">Prices (Kshs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500">English Breakfast</td>
                  <td className="border border-gray-500">Tea, a glass of juice, cereals, buttered slice of bread, one egg, baked beans, a sausage and a fruit.</td>
                  <td className="border border-gray-500 font-bold">400.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-500">Lunch Buffet</td>
                  <td className="border border-gray-500">Soup, two carbohydrates, two proteins, two vegetables, dessert, soda</td>
                  <td className="border border-gray-500 font-bold">650.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-500">Dinner</td>
                  <td className="border border-gray-500">Soup, two carbohydrates, two proteins, two vegetables, dessert, tea</td>
                  <td className="border border-gray-500 font-bold">650.00</td>
                </tr>
              </tbody>


            </table>
      </div>
    </section>    

  )

}


export default Training;
