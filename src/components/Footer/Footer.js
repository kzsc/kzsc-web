import React, {Component} from 'react';
import {List, Grid} from 'semantic-ui-react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer" >
                <Grid className="grid-block">
                    <Grid.Row columns={2}>
                        <Grid.Column className="left-column" color="grey" width={6} className="left-column footer-item">
                            Footer 1
                        </Grid.Column>
                        <Grid.Column color="grey" width={10} className="footer-item">
                            Footer 2
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Footer