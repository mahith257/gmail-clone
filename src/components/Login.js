import './Login.css'
import Gmail from '../assets/gmail-logo.png'
import { Button } from '@material-ui/core'
import { projectAuth, provider } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

export default function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        projectAuth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            })
            .catch(err => alert(err.message))
    }
    return (
        <div className='login'>
            <div className="login-container">
                <img src={Gmail} alt="gmail-logo" />
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}
