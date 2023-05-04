import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, ListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './blogList.css'
import BlogItem from './BlogItem/blogItem'
import SliderImages from '../../../common/components/SlideImage/slideImage'
import blogService from '../../../common/api/blogService'
import Paging from '../../../common/components/Pagination/pagination'
import useResize from '../../../hooks/useResize'

const BlogList = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const size = useResize()
    const fetchArticles = (page,size) =>{
        blogService.getArticle(page,size)
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
        fetchArticles(page,6)
    },[page])
  return (
    <>
    {size.width > 768 && 
        <div >
            <SliderImages/>
        </div>}
    <Container>
        <div className='blog-list'>
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {articles.map((article)=>{
                return(
                                <BlogItem
                                    key={article.id}
                                    article={article}
                                />
                )
            })}
            
        </Grid>
                    <div className="pagination-blog">
                            <Paging 
                            onPageClick={(clickedpage)=>{setPage(clickedpage-1)}} 
                            page={page + 1} 
                            totalPage={totalPage} />
                    </div>  
        </div>
    </Container>  
    </>
  )
}

export default BlogList
