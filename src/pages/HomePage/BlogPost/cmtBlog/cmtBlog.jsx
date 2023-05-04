import { Button } from 'react-bootstrap'
import './cmtBlog.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cmtService from '../../../../common/api/cmtService'
const CmtBlogs = ({articles,cmts,onSubmit}) =>{
    const [comment, setComment] = useState('')
    const [reload, setReload] = useState(false)
    const navigate = useNavigate()
    const handleCmtInput = (e) =>{
        setComment(e.target.value)
    }
    const handleCmtClicked = (e) =>{
        e.preventDefault()
        onSubmit(comment)
        setComment('')
    }
    return(
        <>
        <h1>Comments</h1>
        <div className='cmt-container'>
            {cmts.map((cmt)=>{
            return(
                <div key={cmt.id}>
            <div>
                <span >
                    <img src={cmt.commentBy.avatarUrl}
                        className="rounded-circle avatar-url"/>
                </span>
                <span className='cmt-name'>
                    {cmt.commentBy.fullName}
                </span>
            </div>
            <div className='content'>{cmt.content}</div>
            </div>
            )})}
            
            
        </div>
        
        <input type='text' 
        className="form-control cmt-add" 
        placeholder="Nhập vào bình luận của bạn" 
        onChange={handleCmtInput}
        value={comment}
        />
        <Button onClick={handleCmtClicked}>Bình luận</Button>
        </>
    )
}
export default CmtBlogs