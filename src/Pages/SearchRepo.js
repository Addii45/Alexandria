import { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import {RepoCard} from '../Components'
import {TextField} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import './pages.scss'


const useStyles = makeStyles({
    searchBox: {
        marginBottom:40,
        marginTop:40
    }
})



const SearchRepo = () => {

    const classes = useStyles()

    const [url, setUrl] = useState('repos')
    const [searchRepoContent, setSearchRepoContent] = useState([])
    
    useEffect(() => {
        console.log('INSIDE USE EFFECT')
        axios.get(url)
        .then((res)=> setSearchRepoContent(res.data))
        .catch((err) => console.log(err))
    }, [url,setSearchRepoContent])




    


    // STACK SEARCH BAR : BASED ON STACKS

    const tags = ['', 'tag1', 'tag2']

    const onTagChangeURL = (inpVal) => {
        console.log(inpVal)
        setUrl(`getrepoBytags/${inpVal}`)
    }

    const [tag, setTag] = useState(tags[0])
    const extractTagInpVal = (e, newVal) => {
        setTag(newVal)
        onTagChangeURL(newVal)
    }




    return (
        <div className='searchrepo_bg'>
            <div className='container'>

                

                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-8'>

                        <Autocomplete
                            className={classes.searchBox}
                            options={tags}
                            getOptionLabel={(option) => option}
                            renderInput={(params) => <TextField {...params} label="Search ..." variant="outlined" />}
                            value={tag}
                            onChange={(e,newVal) => extractTagInpVal(e,newVal)} />

                        {searchRepoContent.map(({courseName,courseDesc}, repo_id) => <RepoCard key={repo_id} heading={courseName} para={courseDesc} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchRepo






    

    // var searchRepoContent = [
    //     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
    //     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
    //     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
    //     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
    //     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
    //     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
    //     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}}
    // ]