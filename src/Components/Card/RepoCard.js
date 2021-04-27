import './card.scss'


const RepoCard = ({heading,para}) => {

    return (
        <div className='repoCard'>
            <h2>{heading}</h2>
            <p>{para}</p>
        </div>
    )
}

export default RepoCard