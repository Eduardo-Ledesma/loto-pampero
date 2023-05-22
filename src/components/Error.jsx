
const Error = ({children}) => {

    return (
        <div className="text-center mb-12 font-bold bg-white border-4 border-red-700 text-red-700 rounded-md py-4">
            {children}
        </div>
    );
}

export default Error