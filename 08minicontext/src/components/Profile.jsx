import react, {useContext} from 'react';
import UserContext from '../context/Usercontext';

function Profile() {
    const {user} = useContext(UserContext);
    return(
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                </div>
            ) : (
                <p>Please login to see your profile</p>
            )}
        </div>
    )
}
export default Profile;