import React from 'react'
import PropTypes from 'prop-types'

const Friend=(props)=>{
    
    const {friends, onFavourite, onDelete} =props;

    const onFavouriteClick=(e)=>{
        onFavourite(e.target.dataset.id);
    }
    const onDeleteClick=(e)=>{
        if(window.confirm("Delete this friend ?")){
            onDelete(e.target.dataset.id);
        }
    }
       return(
        <ul className="friends">
            {friends.length>0?friends.map((item)=>{
                return(
                    <li key={item.id}>
                        <div>
                            <span className="name">{item.name}</span>
                            <br/>
                            <span className="description">{"is your friend"}</span>
                         </div>
                        <i data-id={item.id} className={item.favourite==true?"fas fa-star":"far fa-star"} onClick={onFavouriteClick} data-testid="favorite"></i>
                        <i data-id={item.id} className="fas fa-trash-alt" onClick={onDeleteClick}></i>
                    </li>
                )
            }):
            <li>No friend found! Hit enter to add this to your friend's list</li>}
        </ul>
    )
}

Friend.propTypes={
    friends: PropTypes.array, 
    onFavourite: PropTypes.func, 
    onDelete: PropTypes.func
}

export default Friend