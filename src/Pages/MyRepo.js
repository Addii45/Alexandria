import React, { useState, useEffect } from 'react'
import {RepoCard} from '../Components'
import axios from 'axios'
import './pages.scss'



const MyRepo = () => {

    const [repoContent, setRepoContent] = useState([])
    
    useEffect(() => {
        axios.get('repos')
        .then(res => {
            setRepoContent(res.data)
            console.log(res.data)
        })
    }, [setRepoContent])



    return (
        <div className='myrepo_bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-8'>
                        {repoContent.map(({_id,courseName,courseDesc}, repo_id) => <RepoCard key={repo_id} heading={courseName} para={courseDesc} link={_id} />)}                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRepo






// var myRepoContent = [
//     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
//     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
//     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
//     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
//     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
//     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}},
//     {success:true, repo:{id:0, courseName:'Advanced Programming Practice', courseDesc:'Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description, Some random description'}}
// ]