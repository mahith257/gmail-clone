import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import SendIcon from '@material-ui/icons/Send'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../features/mailSlice';

export default function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button startIcon={<CreateIcon />} className='sidebar-compose' onClick={() => dispatch(openSendMessage())}>Compose</Button>
            <SidebarOption Icon = {InboxIcon} title = "Inbox" number = {77} selected = {true} />
            <SidebarOption Icon = {StarIcon} title = "Starred" number = {10} selected = {false} />
            <SidebarOption Icon = {AccessTimeIcon} title = "Snoozed" number = {3} selected = {false} />
            <SidebarOption Icon = {LabelImportantIcon} title = "Important" number = {19} selected = {false} />
            <SidebarOption Icon = {SendIcon} title = "Sent" number = {43} selected = {false} />
            <SidebarOption Icon = {NoteIcon} title = "Drafts" number = {14} selected = {false} />
            <SidebarOption Icon = {ExpandMoreIcon} title = "More" number = {1} selected = {false} />
            <div className="sidebar-footer">
                <div className="sidebar-footer-icons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
