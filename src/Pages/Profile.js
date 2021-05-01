import { useEffect, useState } from 'react'
import axios from 'axios'
import ProfileHeroImg from '../Images/profile.svg'
import ProfilePic from '../Images/profilePic.jpeg'
import './pages.scss'


const Profile = () => {

    const [profileInfo, setProfileInfo] = useState({})




    
    useEffect(() => {
        axios.get('users/myprofile')
        .then(res => {
            setProfileInfo(res.data)
            console.log(res.data)
        })
    }, [setProfileInfo])





    const onImgClick = (e) => {        
        var formdata = new FormData();
        formdata.append('profile_photo', e.target.files[0], e.target.files[0].name);
        console.log(formdata)
        axios.post('users/me/upload', formdata, { headers:{'Content-Type':'multipart/form-data'} })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }





    return (
        <div className='profile_bg'>
            <div className='container'>
                <div className='row' style={{height:'88vh'}}>
                    <div className='col-md-12 col-lg-6 my-auto'>
                        <label htmlFor="file-input"><img className='profile_dp' src={`data:image/jpeg;base64,${profileInfo.profile_photo}` || ProfilePic} alt='profile pic' /></label>
                        <input onChange={(e) => onImgClick(e)} id="file-input" type="file" />
                        <h2>{profileInfo.username}</h2>
                        <h4>{profileInfo.collegeName}</h4>
                        <p className='profile_content'>{profileInfo.desc}</p>
                    </div>
                    <div className='col-md-12 col-lg-6 my-auto'><img className='profile_hero' src={ProfileHeroImg} alt='profile hero img ..'/></div>
                </div>
            </div>
        </div>
    )
}



export default Profile