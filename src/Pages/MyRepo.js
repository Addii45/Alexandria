import './pages.scss'
import {RepoCard} from '../Components'



const MyRepo = () => {


    var myRepoContent = [
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
        {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}}
    ]


    return (
        <div className='myrepo_bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-8'>
                        {myRepoContent.map(({repo}) => <RepoCard heading={repo.courseName} para={repo.courseDesc} />)}                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRepo