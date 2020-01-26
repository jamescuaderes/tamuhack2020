import React from 'react'; 
import "./index.css"

class Job extends React.Component{

    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div className="job">
                {this.props.number}) Recycling available for pickup at {this.props.address}.
            </div>
        );
    }

    
}

export default Job; 