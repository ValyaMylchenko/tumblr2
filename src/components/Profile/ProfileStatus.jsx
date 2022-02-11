import React, { createRef } from 'react';
import s from './Profile.module.css'

class ProfileStatus extends React.Component {
        state = {editMode: false,
        status: this.props.status}

        activateEditMode = () =>  {
            console.log(this)
            this.setState({editMode: true})
        }
        deactivateEditMode = () => {
            this.setState({editMode: false})
            this.props.updateUserStatus(this.state.status)
        }

        onStatusChange = (e) => {
            this.setState({status: e.currentTarget.value});
        }
        componentDidUpdate = (prevProps, prevState) => {
            if (prevProps.status !== this.props.status){
                this.setState({
                    status: this.props.status
                })
            }
        }
        

        render() {
        return (
            <div>
                {!this.state.editMode ? <div>
               <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
            </div>
            : <div>
            <input autoFocus={true} onChange={this.onStatusChange} className = {s.status} onBlur={this.deactivateEditMode} value={this.state.status} />
        </div>
        }
             
            
        </div>
            ) }
}
   


export default ProfileStatus;