

const AlertApi = ({alertConection}) => {
    return (
        <div className='from-red-400 to-red-600 bg-gradient-to-br text-center
            p-3 rounded-xl uppercase text-white mx-auto font-bold text-3xl mb-12 mt-10'>
            {alertConection?.msg}
        </div>
    )
}

export default AlertApi