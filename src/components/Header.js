import './Header.css'
import GmailLogo from '../assets/gmail-logo.png'
import { IconButton, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { projectAuth } from '../firebase/config';

export default function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = () => {
        projectAuth.signOut()
            .then(() => {
                dispatch(logout())
            })
    }
    return (
        <div className='header'>
            <div className='header-left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={GmailLogo} alt='gmail-logo' />
            </div>
            <div className='header-middle'>
                <SearchIcon />
                <input type='text' placeholder='Search in mail' />
                <ArrowDropDown />
            </div>
            <div className='header-right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar style={{width: '26px', height: '26px', cursor: 'pointer'}}  src={user?.photoURL} onClick={signOut} />
            </div>
        </div>
    );
}
