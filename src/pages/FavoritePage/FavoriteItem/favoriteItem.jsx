import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../../HomePage/BlogList/blogList.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Heart from '../../../common/components/Heart/heart'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoriteAction, removeFavoriteAction } from '../../HomePage/BlogPost/redux/action'
const FavoriteItem = ({article}) => {
    const dispatch = useDispatch()
    const ids = useSelector(state => state.ids.ids)
    const [favorite, setFavorite] = useState(()=>{
        return ids.includes(article.id)
    })
  const navigate = useNavigate()
  const handleLinkToBlogPost = () =>{
    navigate('/blog-post'+`/${article.id}`)
  }
  const handleFavoriteButtonClicked = ()=>{
    if(!favorite){
      dispatch(addFavoriteAction(article.id))
    }
    else{
      dispatch(removeFavoriteAction(article.id))
    }
    setFavorite(!favorite)
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
                        <CardActions className='action-card'>

                            <Button size="small" onClick={handleLinkToBlogPost}>Learn More</Button>
                            <div className='heart-favorite'><Heart isFavorite={favorite} onClick={handleFavoriteButtonClicked} /></div>  
                        </CardActions>
                    </Card>
              </div>
      </Grid>
    </>
  )
}

export default FavoriteItem
