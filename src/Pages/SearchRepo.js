import './pages.scss'
import { makeStyles } from '@material-ui/core/styles'
import {RepoCard} from '../Components'
import {TextField} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'


const useStyles = makeStyles({
    searchBox: {
        marginBottom:40,
        marginTop:40
    }
})



const SearchRepo = () => {

    const classes = useStyles()
    

    var searchRepoContent = [
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}}
    ]


    return (
        <div className='searchrepo_bg'>
            <div className='container'>

                

                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-8'>

                        <Autocomplete
                            className={classes.searchBox}
                            options={searchRepoContent}
                            getOptionLabel={(option) => option.repo.courseName}
                            renderInput={(params) => <TextField {...params} label="Search ..." variant="outlined" />}
                        />

                        {searchRepoContent.map(({repo}) => <RepoCard heading={repo.courseName} para={repo.courseDesc} />)}                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchRepo