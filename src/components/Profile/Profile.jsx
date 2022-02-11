import React from 'react';
import s from './Profile.module.css'
import cover from './src/covered.PNG';
import avatar from './src/avatar.jpg';
import Preloader from '../Preloader/Preloader'
import ProfileStatus from './ProfileStatus';

function Profile(props) {
    
    if (!props.profile) {
        return <Preloader />
    } else {
        
        return (
            <div className={s.bg}>
                <div>
                    <img src={cover} className={s.covered} />
                </div>
                <div className={s.basic}>
                <div >
                    <div ><img src={avatar} className={s.avatar} /></div>
                    <div className={s.intro}>{props.profile.fullName}</div>
                    <div className={s.description}>{props.profile.aboutMe}</div>
                </div>
                <div>
                    <ProfileStatus status={props.status} updateUserStatus = {props.updateUserStatus}/>
                </div>
                <div className={s.interactive}>
                    <span>Posts</span>
                    <span>Likes</span>
                    <span>Following</span>
                    <span>Ask</span>
                    <span>Archive</span> 
                </div>
                
                </div>
            </div>)
    }
   
}

export default Profile;