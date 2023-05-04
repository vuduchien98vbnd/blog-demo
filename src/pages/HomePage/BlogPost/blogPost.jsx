import React, { useEffect, useState } from 'react'
import Header from '../../../common/components/Header/header'
import { Avatar, Container, Grid, ListItem } from '@mui/material'
import './blogPost.css'
import useResize from '../../../hooks/useResize'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate, useParams } from 'react-router-dom'
import blogService from '../../../common/api/blogService'
import cmtService from '../../../common/api/cmtService'
import CmtBlogs from './cmtBlog/cmtBlog'
import Heart from '../../../common/components/Heart/heart'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteAction, removeFavoriteAction } from './redux/action'
import GoToTopButton from './GoToTopButton/goToTopButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
const BlogPost = () => {
  const size = useResize()
  const params = useParams()
  const [articles, setArticles] = useState([])
  const [author, setAuthor] = useState([])
  const [cmts, setCmts] = useState([])
  const [reload, setReload] = useState(false)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ids = useSelector(state => state.ids.ids)
     
  const [favorite, setFavorite] = useState(()=>{
            return ids.includes(params.id)
        })
        
  const fetchArticlesId = (id) =>{
    blogService.getArticleId(id)
    .then(response =>{
        const articles = response.data;
        const author = articles.author;
        setArticles(articles)
        setAuthor(author)   
    })
    .catch(error =>{
        console.log(error);
    })
};
const fetchComment =(id)=>{
  cmtService.getComment(0,40,id)
  .then(response=>{
      const data = response.data
      const cmts=data.content
      setCmts(cmts)
  })
  .catch(err=>{
      console.log(err);
  })
}
useEffect(()=>{
  fetchArticlesId(params.id)
  fetchComment(params.id)
 

},[reload])
const handleCmtSubmit = (comment) =>{
  cmtService.postComment(params.id,comment)
  .then(response =>{
      setReload(!reload)
      
  })
  .catch(err=>{
      if(window.confirm('Vui lòng đăng nhập để bình luận')){
          navigate('/login')
      }
  })
}
const handleFavoriteButtonClicked = ()=>{
  if(!favorite){
    dispatch(addFavoriteAction(params.id))
  }
  else{
    dispatch(removeFavoriteAction(params.id))
  }
  setFavorite(!favorite)
}
  return (
    <Container>
      <Grid container spacing={2} style={{marginTop: 30}}>
        <Grid item xs={12} md={9}  >
          <div className='blog-post'>
            <div className='post-img'>
              <img 
              src={articles.coverImageUrl}/>
            </div>
            <h1 className='post-title'>{articles.title}</h1>
            {size.width>=768 ?(
              <div className='post-info-pc'>
                <div className='post-author'>
                  <Avatar src={author.avatarUrl} />
                  <div id='author-name'>{author.fullName}</div>
                </div>
                <div className='post-date-duration'><FontAwesomeIcon icon={faCalendarDays} /> {articles.createdDate}</div>
                <div className='post-date-duration'><FontAwesomeIcon icon={faBookOpen} /> {articles.estDuration} phút đọc</div>
              </div>
            ):(
              <div className='post-info-mb'>
             <div className='post-author'>
                  <Avatar src={author.avatarUrl} />
                  <div id='author-name'>{author.fullName}</div>
                </div>
                <div className='post-date-duration'><FontAwesomeIcon icon={faCalendarDays} /> {articles.createdDate}</div>
                <div className='post-date-duration'><FontAwesomeIcon icon={faBookOpen} /> {articles.estDuration} phút đọc</div>
            </div>
            )}
          </div>
         <p dangerouslySetInnerHTML={{__html:articles.content}}></p>
         <div className="post-favorite-icon"><Heart isFavorite={favorite} onClick={handleFavoriteButtonClicked} /></div>
                    <div className="post-favorite">Yêu thích</div>
         <CmtBlogs key={articles.id}
            cmts={cmts}
            articles={articles}
            onSubmit = {handleCmtSubmit}
          />
        </Grid>
        <Grid item sx={{display:{xs:'none', md:'inline'}}} md={3}  >
          <div>
            <div className='post-add'>About me</div>
            <div className='avatar-add' > 
              <img src={author.avatarUrl}
                    className="rounded-circle"
                    />
            </div>   
            <h1 className='authorName-add'>{author.fullName}</h1>
            <div className='post-add'>Follow me</div>
            <div className='icon-follow'>
              <div className='social-follow'><FacebookIcon style={{color:"#0d6efd", width:"30px", height:"30px"}}/></div>
              <div className='social-follow' ><InstagramIcon style={{color:"#d6249f", width:"30px", height:"30px"}}/></div>
              <div className='social-follow' ><TwitterIcon style={{color:"wheat", width:"30px", height:"30px"}}/></div>
              <div className='social-follow' ><YouTubeIcon style={{color: "red", width:"30px", height:"30px"}}/></div>
            </div>

            
          </div>
        </Grid>
  
      </Grid>
      <GoToTopButton/>
    </Container>
  )
}

export default BlogPost
