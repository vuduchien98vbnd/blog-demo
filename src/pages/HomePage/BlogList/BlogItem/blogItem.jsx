import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import '../blogList.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
const BlogItem = ({article}) => {
  const navigate = useNavigate()
  const handleLinkToBlogPost = () =>{
    navigate('/blog-post'+`/${article.id}`)
  }
  
  return (
    <>
     <Grid item xs={12} md={6} lg={4}>
                <div className='blog-item'>
      <Card sx={{ width: 345, marginTop: 5 }} className='blog-card'>
                        <CardMedia
                            component="img"
                            alt="none"
                            height="190"
                            className='blog-image'
                            image={article.coverImageUrl}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <Link to={"/blog-post" + `/${article.id}`} className='blog-post__title' title={article.title}>{article.title} </Link>
                            </Typography>
                            <div className='blog-info'>
                              <div className='blog-date'><FontAwesomeIcon icon={faCalendarDays} /> {article.createdDate}</div>
                              <div className='blog-date'><FontAwesomeIcon icon={faBookOpen} /> {article.estDuration} phút đọc</div>
                            </div>
                            <Typography variant="body2" color="text.secondary" className='blog-post__content'>
                            <a dangerouslySetInnerHTML={{__html:article.content}}></a>
                            
                            </Typography>
                        </CardContent>
                        <CardActions>
                            
                            <Button size="small" onClick={handleLinkToBlogPost}>Learn More</Button>
                        </CardActions>
                </Card>
              </div>
      </Grid>
    </>
  )
}

export default BlogItem
