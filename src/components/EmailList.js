import './EmailList.css'
import { IconButton, Checkbox } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import EmailSection from './EmailSection'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './EmailRow'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'


export default function EmailList() {
    
    const [emails, setEmails] = useState([])

    useEffect(() => {
        projectFirestore.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    // console.log(emails)

    return (
        <div className='email-list'>
            <div className="email-list-settings">
                <div className="email-list-settingsleft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="email-list-settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="email-list-sections">
                <EmailSection Icon={InboxIcon} title="Primary" color="red" selected />
                <EmailSection Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <EmailSection Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="email-list-rows">
                {emails.length > 0 && emails.map(email => (
                    <EmailRow 
                        key={email.id}
                        title={email.data.to}
                        subject={email.data.subject}
                        description={email.data.message}
                        time={new Date(email.data.timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
                
            </div>
        </div>
    );
}
