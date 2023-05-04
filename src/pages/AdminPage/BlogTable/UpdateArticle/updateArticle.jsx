import { Editor } from "@tinymce/tinymce-react"
import { useRef, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import uploadFileService from "../../../../common/api/uploadFileService"




const UpdateArticle = ({article, onUpdateArticleClicked, onCancel}) =>{
    const [titleInput, setTitleInput] = useState(article.title)
    const [fileUrlInput, setFileUrlInput] = useState(article.coverImageUrl)
    const [bodyInput, setBodyInput] = useState(article.content)
    const editorRef = useRef()
    
    
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
            console.log(fileUrlInput);
        })
        .catch(error =>{
            console.log(error);
        }) 
    }
    const handleInputBodyChange = () =>{
        setBodyInput(editorRef.current.getContent())
        
        
    }
   
   
    const articleInput = {title: titleInput , content: bodyInput, coverImageUrl: fileUrlInput }
    const handleAddButtonClicked = () =>{
        
        onUpdateArticleClicked(articleInput, article.id)
        
    }
    const handleCancel = () =>{
        onCancel()
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
                    <h4>Chọn tệp</h4>
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="file" placeholder="File" onChange={handleInputFileChange} />
                    </Col>
                    
                </Form.Group>
                <h4>Nội dung</h4>
                <Editor 
                    onInit={(e,editor)=> editorRef.current = editor}
                    onEditorChange={handleInputBodyChange}
                    initialValue={bodyInput}
                    
                />
                <button type="button"  className="btn btn-success btn__add-article" onClick={handleAddButtonClicked} >Sửa</button>
                <button type="button"  className="btn btn-danger btn__add-article" onClick={handleCancel} >Hủy</button>
                
                
                
        </>
    )
}
export default UpdateArticle
