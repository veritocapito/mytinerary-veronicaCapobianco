
const Link = ({to, title}) => {


    return (
        <a className='font-bold text-white transition hover:text-gray-500' href={to}>{title}</a>
    )
}

export default Link