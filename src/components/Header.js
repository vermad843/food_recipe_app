import React from 'react';



const Header = () => {
    return (
        <div className = "jumbotron">
            <h1 className = "display-1">
                 <i 
                    className="material-icons"
                    style = {{fontSize : "100px"}}
                    >
                    fastfood
                 </i>
                 Food Recipe 
            </h1>
            <div className="input-group w-50 mx-auto">
            <input
               type="text" 
               className="form-control" 
              />
             <div className = "input-group-append">
            <span 
               className="input-group-text" 
               >Search
            </span>
            </div>
           </div>
        </div>
    )
}

export default Header;


