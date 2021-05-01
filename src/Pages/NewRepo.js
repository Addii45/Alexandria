import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {TextField, Card, CardHeader, CardContent, Button} from '@material-ui/core'
import DelIcon from '../Images/delIcon.svg'
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


const NewRepo = () => {

    const classes = useStyles()
    const history = useHistory()



    // COURSE AND COURSE DESC
    const [coursename, setCoursename] = useState('')
    const [coursedesc, setCoursedesc] = useState('')
    // Functions for storing values in the fields
    const onChangeCourse = e => setCoursename(e.target.value)
    const onChangeCourseDesc = e => setCoursedesc(e.target.value)

    



    // TOPIC AND DESC
    var initialTopicArr = { topic:'', topicDesc:''}
    const [topicArr, setTopicArr] = useState([initialTopicArr])

    // Functions for adding and removing fields
    const addTopicField = () => {
        const topicArrVar = [...topicArr]
        topicArrVar.push(initialTopicArr)
        setTopicArr(topicArrVar)
    }
    var delTopicField = fid => {
        const topicArrVar = [...topicArr]
        topicArrVar.splice(fid, 1)
        setTopicArr(topicArrVar)
    }
    
    // Functions for storing values in the fields
    const onChangeTopic = (e,t_id) => {
        var topicArrVar = [...topicArr]
        topicArrVar[t_id].topic = e.target.value
        setTopicArr(topicArrVar)
        console.log(topicArrVar)
    }
    const onChangeTopicDesc = (e,t_id) => {
        var topicArrVar = [...topicArr]
        topicArrVar[t_id].topicDesc = e.target.value
        setTopicArr(topicArrVar)
        console.log(topicArrVar)
    }

 



    // TOPIC AND LINK
    var initialLinkArr = { linkTopic:'', link:''}
    const [linkArr, setLinkArr] = useState([initialLinkArr])

    // Functions for adding and removing fields
    const addLinkField = () => {
        const linkArrVar = [...linkArr]
        linkArrVar.push(initialLinkArr)
        setLinkArr(linkArrVar)
    }
    var delLinkField = fid => {
        const linkArrVar = [...linkArr]
        linkArrVar.splice(fid, 1)
        setLinkArr(linkArrVar)
    }

    // Functions for storing values in the fields
    const onChangeLinkTopic = (e,l_id) => {
        var linkArrVar = [...linkArr]
        linkArrVar[l_id].linkTopic = e.target.value
        setLinkArr(linkArrVar)
        console.log(linkArrVar)
    }
    const onChangeLink = (e,l_id) => {
        var linkArrVar = [...linkArr]
        linkArrVar[l_id].link = e.target.value
        setLinkArr(linkArrVar)
        console.log(linkArrVar)
    }






    const createNewRepo = () => {
        const data = { courseName:coursename, courseDesc:coursedesc, topicInfo:topicArr, courseLinks:linkArr }
        axios.post('repo', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        history.push('myRepos')
    }







    return (
        <form className='newrepo_bg' autoComplete="off">
            <TextField onChange={e => onChangeCourse(e)} className={classes.widthMax} id="course-name" label="Course Name ..." variant="outlined" />
            <TextField onChange={e => onChangeCourseDesc(e)} className={classes.widthMax} multiline id="course-desc" label="Course Description ..." variant="outlined" />


            <Card className={classes.widthMax}>
                <CardHeader title="TOPIC INFO" />
                <CardContent>
                <Button onClick={addTopicField} variant="contained" color="primary">ADD NEW TOPIC</Button><br/><br/>
                    {topicArr.map((topicDetail,t_id) => <div key={t_id} className='newrepo_topicInfo'>
                        <TextField onChange={e => onChangeTopic(e,t_id)} className={classes.topicInfoText} id={`topic-name-${t_id}`} label="Topic ..." variant="outlined" />
                        <TextField onChange={e => onChangeTopicDesc(e,t_id)} className={classes.topicInfoText} multiline id={`topic-desc-${t_id}`} label="Topic Description ..." variant="outlined" />
                        <img onClick={() => delTopicField(t_id)} className='crudIcon' src={DelIcon} alt='delete icon'/>
                    </div>)}
                </CardContent>
            </Card>


            <Card className={classes.widthMax}>
                <CardHeader title="Link LINKS" />
                <CardContent>
                <Button onClick={addLinkField} variant="contained" color="primary">ADD NEW LINK</Button><br/><br/>
                    {linkArr.map((linkDetail,l_id) => <div key={l_id} className='newrepo_topicInfo'>
                        <TextField onChange={e => onChangeLinkTopic(e,l_id)} className={classes.topicInfoText} id={`link-name-${l_id}`} label="Topic ..." variant="outlined" />
                        <TextField onChange={e => onChangeLink(e,l_id)} className={classes.topicInfoText} id={`link-desc-${l_id}`} label="Topic Link ..." variant="outlined" />
                        <img onClick={() => delLinkField(l_id)} className='crudIcon' src={DelIcon} alt='delete icon'/>
                    </div>)}
                </CardContent>
            </Card>


            <Button onClick={createNewRepo} className={classes.btn} variant="contained" color="primary">CREATE REPOSITORY</Button>
        </form>
    )
}

export default NewRepo