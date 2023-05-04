import React, { useEffect, useState } from 'react'
import Header from '../../common/components/Header/header'
import { useSelector } from 'react-redux'
import blogService from '../../common/api/blogService'
import { Container, Grid } from '@mui/material'
import FavoriteItem from './FavoriteItem/favoriteItem'

const FavoritePage = () => {
  const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
  const ids = useSelector(state =>state.ids.ids)
  

  const fetchArticles = (page,size) =>{
    blogService .getArticle(page,size)
    .then(response =>{
        const data = response.data;
        const articles = data.content;
        const totalPage = data.totalPages;
        setArticles(articles);
        setTotalPage(totalPage);
        if (totalPage <= page){
            setPage(totalPage-1)
        }

    })
    .catch(error =>{
        console.log(error);
    })
};
useEffect(() => {
  fetchArticles(page,100)
},[page])
const favoriteArticle = () =>{
  if(!articles){
      return []
  }
  else{
  return articles.filter(article => ids.includes(article.id))
  }  
}
  return (
    <>
      <Header/>
      
        <Container>
          <h1>Bài viết yêu thích</h1>
          <div className='blog-list'>
            
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {favoriteArticle().map((article)=>{
                            return(
                                            <FavoriteItem
                                                key={article.id}
                                                article={article}
                                            />
                            )
                        })}
                        
                    </Grid>
          </div>
          </Container>
      
    </>
  )
}

export default FavoritePage
