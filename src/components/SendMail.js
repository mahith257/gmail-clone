import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import { projectFirestore } from '../firebase/config'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export default function SendMail() {

    const {register, handleSubmit, watch, formState: {errors} } = useForm()
    const dispatch = useDispatch()

    const onSubmit = (formData) => {
        // console.log(formData)
        projectFirestore.collection('emails').add(
            {
                to:formData.to,
                subject:formData.subject,
                message:formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )

        dispatch(closeSendMessage())
    }


    return (
        <div className='send-mail'>
            <div className="send-mail-header">
                <h3>New Message</h3>
                <CloseIcon className='close-icon' onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder='To' name='to' {...register("to", {required: true})} />
                {errors.to && <p className='send-mail-error'>To is required</p>}
                <input type="text" placeholder='Subject' name='subject' {...register("subject", {required: true})} />
                {errors.subject && <p className='send-mail-error'>Subject is required</p>}
                <textarea placeholder='Message' className='message' name='message' {...register("message", {required: true})} />
                {errors.message && <p className='send-mail-error'>Message is required</p>}
                <div className="send-mail-options">
                    <Button className='send-button' variant='contained' color='primary' type='submit'>Send</Button>
                </div>
            </form>
        </div>
    );
}
