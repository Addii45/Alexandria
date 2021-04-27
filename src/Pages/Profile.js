import './pages.scss'
import ProfileHeroImg from '../Images/profile.svg'
import ProfilePic from '../Images/profilePic.jpeg'

const Profile = () => {
    return (
        <div className='profile_bg'>
            <div className='container'>
                <div className='row' style={{height:'88vh'}}>
                    <div className='col-md-12 col-lg-6 my-auto'>
                        <img className='profile_dp' src={ProfilePic} alt='profile pic'/>
                        <h2>TANISHA BISHT</h2>
                        <h4>tanishabisht</h4>
                        <p>SRM Institute of Science And Technology</p>
                        <p className='profile_content'>SOME random information about the person … sjdfh sfiue hif weudom information about the person … sjdfh sfiue hif weufhwie fw efiuwheif iuwefhiw efiuwuehf wef OME random information about the person … sjdfh sfiue hif weufhwie fw efiuwheif iuwefhiw efiuwuehf wef</p>
                    </div>
                    <div className='col-md-12 col-lg-6 my-auto'><img className='profile_hero' src={ProfileHeroImg} alt='profile hero img ..'/></div>
                </div>
            </div>
        </div>
    )
}

export default Profile