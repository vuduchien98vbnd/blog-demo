import { Editor } from "@tinymce/tinymce-react"
import { useRef, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import './addArticle.css'
import uploadFileService from "../../../../common/api/uploadFileService"
import { useNavigate } from "react-router-dom"

import BlogAdminService from "../../../../common/api/blogAdminService"

const AddArticle = () =>{
    const [titleInput, setTitleInput] = useState('')
    const [fileUrlInput, setFileUrlInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')
    const editorRef = useRef()
    const navigate = useNavigate()
  
    const handleInputTitleChange = (e) =>{
        setTitleInput(e.target.value)
      
    }
    const handleInputFileChange = (e) =>{ 
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        uploadFileService.uploadFile(formData)
        .then(response=>{
            const data = response.data
            
            const fileDownloadUri = data.fileDownloadUri
            setFileUrlInput(fileDownloadUri)
            
        })
        .catch(error =>{
            console.log(error);
        }) 
    }
    const handleInputBodyChange = () =>{
        setBodyInput(editorRef.current.getContent())
       
    }
    const handleOnCancelClick = () =>{
        navigate("/admin/table")
    }
    
    const articleInput = {title: titleInput , content: bodyInput, coverImageUrl: fileUrlInput }
    const handleAddButtonClicked = () =>{
        BlogAdminService.createArticle(articleInput)
        .then(response => {
            alert('Thêm thành công');
            
            navigate('/admin/table')
        })
        .catch(error => {
            alert('Thêm bài viết không thành công !!!');
        })
        
    }
    
    
    return(
        <>
                <h1>Thêm mới bài viết</h1>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledTextInput"><h4>Tiêu đề</h4></Form.Label>
                    <Form.Control id="disabledTextInput" placeholder="Nhập vào tiêu đề" onChange={handleInputTitleChange} value={titleInput}/>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    <h4>Ảnh bìa</h4>
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="file" placeholder="File" onChange={handleInputFileChange}/>      
                    </Col>
                    
                </Form.Group>
                <h4>Nội dung</h4>
                <Editor 
                    onInit={(e,editor)=> editorRef.current = editor}
                    onEditorChange={handleInputBodyChange}
                    
                />
                <button type="button"  className="btn btn-success btn__add-article" onClick={handleAddButtonClicked} >Thêm</button>
                <button type="button" onClick={handleOnCancelClick} className="btn btn-danger btn__add-article">Hủy</button>
                
        </>
    )
}
export default AddArticle
