function PaginationItem({page, isActive, onPageClick}){
    if(isActive){
        return <li className="page-item"><a className="page-link active" onClick={() => onPageClick(page)}>{page}</a></li>
    }
    return (
        <li className="page-item"><a className="page-link" onClick={() => onPageClick(page)}>{page}</a></li>
    );
}

export default PaginationItem;