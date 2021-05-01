import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {TextField, Card, CardHeader, CardContent, Button} from '@material-ui/core'
import DelIcon from '../Images/delIcon.svg'
import {BtnTag} from '../Common'
import './pages.scss'
import axios from 'axios'


const useStyles = makeStyles({
    widthMax: {
        width:'80%',
        marginTop:20
    },
    topicInfoText: {
        width:'100%',
        marginBottom:10,
        marginRight:10
    },
    btn: {
        margin:10
    }
})


const FinalRepo = () => {

    const classes = useStyles()
    const history = useHistory()
    const { repoId } = useParams()

    const [repoDetails, setRepoDetails] = useState('')


    useEffect(() => {
        axios.get(`repos/${repoId}`)
            .then(res => setRepoDetails(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='finalrepo_bg'>
            <div className='container finalrepo_container'>

                <h1>{repoDetails.courseName}</h1>
                <p>{repoDetails.courseDesc}</p>
                <br/><br/>
            
                
                {repoDetails ? repoDetails.topicInfo.map(({topic,topicDesc}) => <div>
                    <h2>{topic}</h2>
                    <p>{topicDesc}</p>
                </div>): null}
                <br/><br/>


                <h4>COURSE LINKS</h4>
                {repoDetails ? repoDetails.courseLinks.map(({linkTopic,link}) => <a target='_blank' href={link}><BtnTag>{linkTopic}</BtnTag></a>): null}

                
            </div>
        </div>
    )
}

export default FinalRepo









// <Card className={classes.widthMax}>
// <CardHeader title="TOPIC INFO" />
// <CardContent>
// <Button onClick={addTopicField} variant="contained" color="primary">ADD NEW TOPIC</Button><br/><br/>
//     {topicArr.map((topicDetail,t_id) => <div key={t_id} className='newrepo_topicInfo'>
//         <TextField onChange={e => onChangeTopic(e,t_id)} className={classes.topicInfoText} id={`topic-name-${t_id}`} label="Topic ..." variant="outlined" />
//         <TextField onChange={e => onChangeTopicDesc(e,t_id)} className={classes.topicInfoText} multiline id={`topic-desc-${t_id}`} label="Topic Description ..." variant="outlined" />
//         <img onClick={() => delTopicField(t_id)} className='crudIcon' src={DelIcon} alt='delete icon'/>
//     </div>)}
// </CardContent>
// </Card>


// <Card className={classes.widthMax}>
// <CardHeader title="Link LINKS" />
// <CardContent>
// <Button onClick={addLinkField} variant="contained" color="primary">ADD NEW LINK</Button><br/><br/>
//     {linkArr.map((linkDetail,l_id) => <div key={l_id} className='newrepo_topicInfo'>
//         <TextField onChange={e => onChangeLinkTopic(e,l_id)} className={classes.topicInfoText} id={`link-name-${l_id}`} label="Topic ..." variant="outlined" />
//         <TextField onChange={e => onChangeLink(e,l_id)} className={classes.topicInfoText} id={`link-desc-${l_id}`} label="Topic Link ..." variant="outlined" />
//         <img onClick={() => delLinkField(l_id)} className='crudIcon' src={DelIcon} alt='delete icon'/>
//     </div>)}
// </CardContent>
// </Card>


// <Button onClick={createNewRepo} className={classes.btn} variant="contained" color="primary">CREATE REPOSITORY</Button>