import React from 'react';
import Photo from './Photo'
import Title from './Title';
import IMG from './logo192.png'
function Wrapper(){
    
    return(
<div className="App">
    <Photo IMG={IMG}/>
    <Title name1="My Name Here"/>
    <Title name1="My Job Here"/>
     </div>
    );
}
export default Wrapper;