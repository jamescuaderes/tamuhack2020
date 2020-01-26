import React from 'react'; 
import NavBar from './NavBar';
import Job from './Job';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Button} from 'reactstrap'
import "./index.css";


class Driver extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            showJobs: false
        }
    }

    toggle() {
        if(this.state.showJobs) {
            this.setState({
                showJobs: false
            });
        } else {
            this.setState({
                showJobs: true
            });
        }
    }

    renderButton() {
        return( 
            <Row>
                <Col sm={{offset:4}}>
                    <Button className='margin' color='success' onClick={()=>this.toggle()}><h3>3 Recycling Job's Available</h3></Button>
                </Col>
            </Row>
        );
    }

    toggle = this.toggle.bind(this);

    renderJobs() {
        if(!this.state.showJobs) {
            return <div />
        } else {
            return (
                <div>
                    <Col sm={{offset:3}}>
                        <Row>
                            <Job number='1' address='12345 Aggie Lane, College Station, TX'/>
                        </Row>
                        <Row>
                            <Job number='2' address='54321 TAMU Street, College Station, TX' />
                        </Row>
                        <Row>
                            <Job number='3' address='00000 Yes Circle, Bryan, TX, College Station, TX' />
                        </Row>
                    </Col>
                </div>
            );
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                {this.renderButton()}
                {this.renderJobs()}
            </div>
        )
        
    }
}

export default Driver; 