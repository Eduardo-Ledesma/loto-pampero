

const Winners4 = ({winner}) => {

    const { clientName, n1, n2, n3, n4, sellerName } = winner

    return (
        <div className="border-2 border-gray-300 rounded-lg py-4 px-10">
            <h3 className="font-bold text-blue-500 mb-6 text-center">{clientName}</h3>

            <div className="">
                <ul className="flex justify-around md:justify-between mb-2">
                    <li className="border-2 rounded-lg border-blue-500 p-2 font-bold text-gray-300 px-4">{n1}</li>
                    <li className="border-2 rounded-lg border-blue-500 p-2 font-bold text-gray-300 px-4">{n2}</li>
                    <li className="border-2 rounded-lg border-blue-500 p-2 font-bold text-gray-300 px-4">{n3}</li>
                    <li className="border-2 rounded-lg border-blue-500 p-2 font-bold text-gray-300 px-4">{n4}</li>
                </ul>
            </div>
            <p className="text-3xl mt-6 text-gray-300 font-bold">Vendedor: {sellerName}</p>
        </div>
    )
}

export default Winners4