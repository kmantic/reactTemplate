import React from 'react'; 
import Modal2 from './modal';

class TopBar extends React.Component{

    render(){
        return (
                <div className="topBar">
                    <div className="topBarContent"> 
                        <Modal2 />
                    </div>
                    <div className="topBarTitle">
                    Main Page Title 
                    </div>
                    
                    
                    <i onClick={this.props.iconHandler} className={this.props.icon} />
                </div>)
    }s
    
}

export default TopBar; 