

const Alert = ({alert}) => {
    return (
        <div className={`${alert.error ? 'from-red-400 to-red-600' : 'from-sky-400 to-sky-600'} 
            bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white mx-auto font-bold text-xl mb-12 mt-10 }`}>
            {alert.msg}
        </div>
    )
}

export default Alert