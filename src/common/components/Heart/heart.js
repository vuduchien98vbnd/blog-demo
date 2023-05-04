import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './heart.css'



const Heart = ({isFavorite, onClick}) => {
    const handleStartClicked = () => {
        if(onClick){
            onClick();
        }
    }
    if(isFavorite){
        return <FontAwesomeIcon onClick={handleStartClicked} className="light-heart" icon={faHeart} />
    }
    return <FontAwesomeIcon onClick={handleStartClicked} icon={faHeart} />
};


export default Heart;