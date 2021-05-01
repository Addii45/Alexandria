import {useHistory} from 'react-router-dom'
import LinkIcon from '../../Images/iconLink.svg'
import DeleteIcon from '../../Images/delIcon.svg'
import axios from 'axios'
import './card.scss'


const RepoCard = ({heading,para,link}) => {

    const history = useHistory()


    const onClickLink = () => history.push(`finalRepo/${link}`)
    const onDelete = () => {
        axios.delete(`repos/${link}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    return (
        <div className='repoCard'>
            <h2>{heading}</h2>
            <p>{para}</p>
            <p style={{textAlign:'right'}}>
                <img onClick={onClickLink} className='crudIcon' src={LinkIcon} alt='link' />
                <img onClick={onDelete} className='crudIcon' style={{marginLeft:'5px'}} src={DeleteIcon} alt='del' />
            </p>
        </div>
    )
}

export default RepoCard