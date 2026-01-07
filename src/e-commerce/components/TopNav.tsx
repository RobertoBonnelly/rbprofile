import '../../styles/Topnav.css'

export default function ECTopNav() {
    return(
        <div className='topnav flex m-t'>
            <input className='LP-input' type="text" placeholder='Look for your product' />
            <button className='auth'>authentication</button>
        </div>
    )
}