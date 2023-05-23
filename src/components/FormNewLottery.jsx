

const FormNewLottery = ({clients}) => {

    console.log(clients);

    return (
        <>
            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="fullName">Seleccionar Cliente:</label>
                <select name="fullName" id="fullName" 
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white hover:cursor-pointer"
                >
                <option value="">-- Seleccione --</option>
                { clients.map(client => (
                    <option key={client.id} defaultValue={client.fullName}>{client.fullName}</option>
                ))}
                </select>
            </div>

            <div className="flex flex-col lg:flex-row">
                <label className="mb-6 lg:w-1/3" htmlFor="fullName">Números:</label>
                <div className="flex justify-between flex-wrap gap-y-4 lg:w-2/3">
                    <input type="number" name="number1" id="number1" 
                        placeholder="N°1" min="0" max="99" defaultValue={clients?.number1}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number2" id="number2" 
                        placeholder="N°2" min="0" max="99" defaultValue={clients?.number2}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number3" id="number3" 
                        placeholder="N°3" min="0" max="99" defaultValue={clients?.number3}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number4" id="number4"
                        placeholder="N°4" min="0" max="99" defaultValue={clients?.number4}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                </div>
            </div>
        </>
    )
}

export default FormNewLottery