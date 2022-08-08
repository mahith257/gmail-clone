import './EmailRow.css'
import { useNavigate } from 'react-router-dom'
import { Checkbox, IconButton } from '@material-ui/core'
import StarBorderedOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useDispatch } from 'react-redux'
import { selectMail } from '../features/mailSlice'

export default function EmailRow({title, subject, description, id, time}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time
        }))

        navigate({pathname: './mail'})
    }

    return (
        <div className='email-row' onClick={openMail}>
            <div className="email-row-options">
                <Checkbox />
                <IconButton>
                    <StarBorderedOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="email-row-title">
                {title}
            </h3>
            <div className="email-row-message">
                <h4>
                    {subject}
                    <span className="email-row-description"> - {description}
                    </span>
                </h4>
            </div>
            <div className='email-row-time'>
                {time}
            </div>
        </div>
    );
}
