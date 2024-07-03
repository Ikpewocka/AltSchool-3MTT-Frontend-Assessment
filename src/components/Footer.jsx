import {FaPhone, FaMapMarker} from 'react-icons/fa';
function Footer(){
    return(
        <footer>
            <div className="copyright">
             <p>&copy; {new Date().getFullYear()} {import.meta.env.VITE_COMPANY_NAME}. Designed by ikpewockd@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer