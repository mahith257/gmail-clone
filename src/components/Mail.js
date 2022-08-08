import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { IconButton } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOpenMail } from '../features/mailSlice'

export default function Mail() {
    const navigate = useNavigate()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className='mail'>
            <div className="mail-settings">
                <div className="mail-settings-left">
                    <IconButton onClick={() => navigate({pathname: '/'})}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail-settings-right">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail-body">
                <div className="mail-body-header">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='label-important' />
                    <p>{selectedMail?.title}</p>
                    <p className='mail-time'>{selectedMail?.time}</p>
                </div>
                <div className="mail-description">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
}
