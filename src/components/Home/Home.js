import React, {Component} from 'react';
import MainContent from './MainContent';
import ListContent from './ListContent';

class Home extends Component{
    render(){
        return(
            <div>
                <MainContent></MainContent>
                <ListContent></ListContent>
            </div>
        );
    }
}

export default Home;
