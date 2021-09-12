import React from 'react'; 

class SideBar extends React.Component{

render(){

    return <div className={this.props.class}>
        <h4>Pages</h4>

    <div onClick={this.props.closeHandler} >
     <ul>{
            this.props.data.map((item,i) => {
            return <li key={i}>{item}</li>})
        }
    </ul> 
    </div>

    </div>
}

}

export default SideBar; 