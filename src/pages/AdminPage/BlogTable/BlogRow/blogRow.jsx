import * as React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled, alpha } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faTrashCan } from '@fortawesome/free-solid-svg-icons';



const BlogRow = ({article, onDeleteArticle, onUpdateArticle}) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    const handleDeleteButtonClicked = () =>{
        if(onDeleteArticle){
            onDeleteArticle(article.id)
        }
    }
    const handleUpdateShowButton = () =>{
      onUpdateArticle(article.id)
    }

    
  return (
    <>
      <StyledTableRow >
              <StyledTableCell component="th" scope="row">{article.title}</StyledTableCell>
              <StyledTableCell align="center">{article.author.fullName}</StyledTableCell>
              <StyledTableCell align="center">{article.createdDate}</StyledTableCell>
              <StyledTableCell align="center">{article.estDuration}</StyledTableCell>
              <StyledTableCell align="center"><button type="button" className="btn btn-warning" onClick={handleUpdateShowButton}><FontAwesomeIcon icon={faPenNib} /> Sửa</button></StyledTableCell>
              <StyledTableCell align="center"><button type="button" className="btn btn-danger" onClick={handleDeleteButtonClicked}><FontAwesomeIcon icon={faTrashCan} /> Xóa</button></StyledTableCell>
            </StyledTableRow>
    </>
  )
}

export default BlogRow
