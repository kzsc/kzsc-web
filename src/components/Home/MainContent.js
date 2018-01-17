import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import './MainContent.css';

class MainContent extends Component{
    render(){
        return(
            <Grid className="main-content-grid" stackable>
                <Grid.Row>
                    <Grid.Column width={10} color="yellow" className="grid-element height-300">
                        Featured Content 1
                    </Grid.Column>
                    <Grid.Column width={6} color="red" className="grid-element height-300">
                        Business Underwriting Section
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4} color="blue" className="grid-element sub">
                        Featured Content 3
                    </Grid.Column>
                    <Grid.Column width={4} color="purple" className="grid-element sub">
                        Featured Content 4
                    </Grid.Column>
                    <Grid.Column width={4} color="pink" className="grid-element sub">
                        Featured Content 5
                    </Grid.Column>
                    <Grid.Column width={4} color="grey" className="grid-element sub">
                        Featured Content 6
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        );
    }
}

export default MainContent
