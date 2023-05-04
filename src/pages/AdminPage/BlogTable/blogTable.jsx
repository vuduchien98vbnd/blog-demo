import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import useResize from '../../../hooks/useResize';
import BlogRow from './BlogRow/blogRow';
import BlogAdminService from '../../../common/api/blogAdminService';
import Paging from '../../../common/components/Pagination/pagination';
import { useEffect } from 'react';
import './blogTable.css'
import { Outlet, useNavigate } from 'react-router-dom';
import AddArticle from './AddArticle/addArticle';
import { useSelector } from 'react-redux';
import { Update } from '@mui/icons-material';
import UpdateArticle from './UpdateArticle/updateArticle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  marginTop: '20px',
  marginBottom:'20px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function BlogTable() {
  const [articles, setArticles] = React.useState([])
  const [articleIds, setArticleIds] = React.useState([])
    const [page, setPage] = React.useState(0);
    const [inputTitle, setInputTitle] = React.useState('');
    const [inputCreatedDateFrom, setInputCreatedDateFrom] = React.useState('');
    const [inputCreatedDateTo, setInputCreatedDateTo] = React.useState('');
    const [totalPage, setTotalPage] = React.useState(0);
    const [reload, setReload] = React.useState(false);
    const [show, setShow] = React.useState(true)
    
  const size = useResize()
  const navigate = useNavigate()
  const handleCancel = () =>{
    setShow(!show)
}
  const body = {
    title: inputTitle,
    createdDateFrom: inputCreatedDateFrom,
    createdDateTo: inputCreatedDateTo
    
}


  const fetchArticle = (page,size,body) =>{
    BlogAdminService.getArticle(page,size,body) 
    .then(response =>{
        
        const data = response.data
        const articles = data.content
        const totalPage = data.totalPages

        setArticles(articles)
        setTotalPage(totalPage);
        if(totalPage <= page){
            setPage(totalPage-1);
        }
        
    })
    .catch(error =>{
        console.log(error);
    })
}

useEffect(()=>{
  
    fetchArticle(page,6,body)
   
},[page,reload])
const handleSearch = () =>{
  fetchArticle(page,6,body)
}
const handleDeleteArticle = (articleId) =>{
  if(window.confirm('Bạn có chắc chắn muốn xóa bài viết này không?')){
      BlogAdminService.deleteArticle(articleId)
      .then(response =>{
          alert('Xóa bài viết thành công');
          setReload(!reload)
      })
      .catch(error=>{
          alert('Đã xảy ra lỗi vui lòng thử lại')
      })
  }
}


const handleAddArticle = () =>{
  navigate("/admin/add-article")
}
const fetchArticlesId = (id) =>{
  BlogAdminService.getArticleId(id)
  .then(response =>{
      const articleIds = response.data;
      
      setArticleIds(articleIds)  
      
  })
  .catch(error =>{
      console.log(error);
  })
};
const handleUpdateArticleShow = (articleId) =>{
    fetchArticlesId(articleId)
   
    setShow(!show)
}
const handleUpdateButtonClicked = (article,articleId) =>{
  BlogAdminService.updateArticle(article,articleId)
        .then(response => {
            alert('Sửa bài viết thành công');
            setShow(!show);
            setReload(!reload);
        })
        .catch(error => {
            alert('Đã có lỗi vui lòng thử lại');
        })
  
}
const handleInputSearchTitle = (e) =>{
  setInputTitle(e.target.value)
  
}

  return (
  <>
  {
    show &&
    <div>
      <h1>DANH SÁCH BÀI VIẾT</h1>
      {size.width > 768 ?(
        <Search  >
              
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  style={{border:'1px solid skyblue', width:'60%', borderRadius:"20px"}}
                  onChange={handleInputSearchTitle}
                  value={inputTitle}
                />
                
                <Button variant="contained" color="success" style={{marginLeft:'5px', borderRadius:'15px'}} onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} />  Tìm kiếm</Button>
                <Button variant="contained"  style={{marginLeft:'5px', borderRadius:'15px'}} onClick={handleAddArticle}><FontAwesomeIcon icon={faFileCirclePlus} /> Thêm bài viết</Button>
      </Search>
      ):(<>
        <Search  >
              
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  style={{border:'1px solid skyblue', width:'70%', borderRadius:"20px"}}
                />  
                <Button variant="contained" color="success" style={{marginLeft:'5px', borderRadius:'15px'}} onClick={handleAddArticle}><FontAwesomeIcon icon={faMagnifyingGlass} /> Tìm kiếm</Button>   
      </Search>
                
                <Button variant="contained"  style={{marginLeft:'5px', marginBottom:'5px', borderRadius:'15px'}} onClick={handleAddArticle}><FontAwesomeIcon icon={faFileCirclePlus} />Thêm bài viết</Button>
      </>
      )}
        <div style={{margin:'10px'}}>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tên bài viết</StyledTableCell>
                <StyledTableCell align="center">Tác giả</StyledTableCell>
                <StyledTableCell align="center">Ngày đăng</StyledTableCell>
                <StyledTableCell align="center">Thời gian đọc</StyledTableCell>
                <StyledTableCell align="center">#</StyledTableCell>
                <StyledTableCell align="center">#</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article)=>{
                return(
                <BlogRow key={article.id}
                article={article}
                onDeleteArticle={handleDeleteArticle}
                onUpdateArticle={handleUpdateArticleShow}/>
                )
              })}
              
                
              
            </TableBody>
          </Table>
        </TableContainer>
        <div className='blogTable-pagination'>
                <Paging 
                            onPageClick={(clickedpage)=>{setPage(clickedpage-1)}} 
                            page={page + 1} 
                            totalPage={totalPage} />
        </div>
        </div>  
    </div>
    }
    {!show && 
    
      
      <UpdateArticle 
        key={articleIds.id}
        onUpdateArticleClicked={handleUpdateButtonClicked}
        article={articleIds}
        onCancel={handleCancel}
        />
      } 
    </>
  );
}