import { useSelector } from 'react-redux'
import './Profile.css'
import { auth } from "../../firebase"
import Navbar from '../HomeScreen/Navbar/Navbar';
import { selectuser } from '../../features/userSlice';

function ProfileScreen() {
    const user = useSelector(selectuser);

    return (
        <div className='profileScreen'>
            <Navbar />
            <div className='profile_screen_body'>
                <h1>Edit profile</h1>
                <div className='profileScreen_info'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='Avatarimg' />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className='profileScreen_signout'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen