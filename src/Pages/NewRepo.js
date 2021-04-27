import './pages.scss'
import { makeStyles } from '@material-ui/core/styles'
import {TextField, Card, CardHeader, CardContent, Button} from '@material-ui/core'


const useStyles = makeStyles({
    widthMax: {
        width:'80%',
        marginBottom:10
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

    return (
        <form className='newrepo_bg' autoComplete="off">
            <TextField className={classes.widthMax} id="course-name" label="Course Name ..." variant="outlined" />
            <TextField className={classes.widthMax} multiline id="course-desc" label="Course Description ..." variant="outlined" />
            <Card className={classes.widthMax}>
                <CardHeader title="TOPIC INFO" />
                <CardContent>
                <Button variant="contained" color="primary">ADD NEW TOPIC</Button><br/><br/>
                    <div className='newrepo_topicInfo'>
                        <TextField className={classes.topicInfoText} id="course-name" label="Topic ..." variant="outlined" />
                        <TextField className={classes.topicInfoText} multiline id="course-desc" label="Topic Description ..." variant="outlined" />
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.widthMax}>
                <CardHeader title="COURSE LINKS" />
                <CardContent>
                <Button variant="contained" color="primary">ADD NEW LINK</Button><br/><br/>
                    <div className='newrepo_topicInfo'>
                        <TextField className={classes.topicInfoText} id="course-name" label="Topic ..." variant="outlined" />
                        <TextField className={classes.topicInfoText} id="course-desc" label="Topic Link ..." variant="outlined" />
                    </div>
                </CardContent>
            </Card>
            <Button className={classes.btn} variant="contained" color="primary">CREATE REPOSITORY</Button>
        </form>
    )
}

export default NewRepo