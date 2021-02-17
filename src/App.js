import React, {useState} from 'react'
import Friend from './Friend';
import Pagination from './Pagination';
import data from './data.json'

const App=()=> {

  const {defaultData}= data;
  const itemsPerPage=4;
  
  const sortedData=[...defaultData.filter((item)=>{return item.favourite==true}), ...defaultData.filter((item)=>{return item.favourite!=true})];
  

  const [stateData, setstateData]= useState({
    friends: [...sortedData],
    filteredFriends: [...sortedData],
    pageNo:1
  })


  const onChange=(e)=>{
    setstateData({
      ...stateData,
      filteredFriends: stateData.friends.filter((item)=>{ return item.name.toUpperCase().includes(e.target.value.toUpperCase())})
    })
  }

  const onKeyUp=(e)=>{
    if(e.keyCode===13){
      const id= Math.random();
      let newData= [...stateData.friends, {id:id, name:e.target.value, favourite:false}]
      setstateData({
        ...stateData,
        friends:[...newData],
        filteredFriends: [...newData.filter((item)=>{return item.favourite==true}), ...newData.filter((item)=>{return item.favourite!=true})]
      })
      
    }
  }

  const onFavourite=(id)=>{
    
    let newData= stateData.friends.map((item)=>{
      if(item.id==id){
        item.favourite= !item.favourite
        return item
      }
      else{
        return item
      }
    })
    newData= [...newData.filter((item)=>{return item.favourite==true}), ...newData.filter((item)=>{return item.favourite!=true})]
    setstateData({
      ...stateData,
      friends: [...newData],
      filteredFriends: [...newData]
    })
  }

  const onDelete=(id)=>{    
    let newData= stateData.friends.filter((item)=>{
      if(item.id!=id){
        return item
      }
    })
    newData= [...newData.filter((item)=>{return item.favourite==true}), ...newData.filter((item)=>{return item.favourite!=true})]
    setstateData({
      ...stateData,
      friends: [...newData],
      filteredFriends:[...newData]
    })
  }

  const onPageClick=(id)=>{
      setstateData({
        ...stateData,
      pageNo: Number(id)
    })
  }

    return (
      <div className="app">
        <div className="app-container">
          <header>Friends List</header>
          <input type="search" placeholder="Type here and hit enter to add new friend" onChange={onChange} onKeyUp={onKeyUp}/>
          <Friend friends={stateData.filteredFriends.slice((stateData.pageNo* itemsPerPage)-itemsPerPage,(stateData.pageNo* itemsPerPage))} onFavourite={onFavourite} onDelete={onDelete}/>
          <Pagination totalPages={Math.ceil(stateData.filteredFriends.length / itemsPerPage)} onPageClick={onPageClick}/>
          </div>
      </div>
    );
  
}

export default App;
