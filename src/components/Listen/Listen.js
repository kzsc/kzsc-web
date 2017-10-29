import React, {Component} from 'react';
import {Grid, Table } from 'semantic-ui-react';
import FaApple from 'react-icons/lib/fa/apple';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import './Listen.css';

class Listen extends Component{
    render(){
        return(
        <div>
            <Grid className="list-content">
                <Grid.Row className="list-row listen">
                    <Grid.Column  size={16}>
                        <div className="table-desc">
                        KZSC doesn’t just broadcast to 3 million people over the radio airwaves at 88.1FM, we also broadcast to the entire world over the internet tubes! This table below explains how you can tune in, even when you’re not in lovely Santa Cruz.
                        <br/>
                        For our main stream, you can use one of the two different quality webstreams listed below, find us in iTunes under “College Radio”, or just press the red PLAY button to the right.
                        </div>
                        <div className="table1">
                            <Table size="large">
                                <Table.Header>
                                    <Table.HeaderCell>Format</Table.HeaderCell>
                                    <Table.HeaderCell>Quality</Table.HeaderCell>
                                    <Table.HeaderCell>Connection Type</Table.HeaderCell>
                                    <Table.HeaderCell>Stream</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell> mp3 </Table.Cell>
                                        <Table.Cell> 56kbps </Table.Cell>
                                        <Table.Cell> Dial-up </Table.Cell>
                                        <Table.Cell><a href="http://streaming.kzsc.org/kzsclow.m3u"> Link </a></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell> mp3 </Table.Cell>
                                        <Table.Cell> 128kbps </Table.Cell>
                                        <Table.Cell> DSL/Cable </Table.Cell>
                                        <Table.Cell><a href="http://streaming.kzsc.org/kzschigh.m3u"> Link </a></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                        <div className="table1">
                            <Table size="large">
                                <Table.Header>
                                    <Table.HeaderCell>Windows</Table.HeaderCell>
                                    <Table.HeaderCell>Mac</Table.HeaderCell>
                                    <Table.HeaderCell>Linux</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell> Winamp </Table.Cell>
                                        <Table.Cell> iTunes </Table.Cell>
                                        <Table.Cell> XMMS </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell> iTunes</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="list-row listen">
                    <Grid.Column  size={16}>
                    <div className="mobile-desc"> Listen to KZSC 88.1FM on Android and iOS </div>
                    <a href="https://play.google.com/store/apps/details?id=org.kzsc.streaming">
                    </a>
                    <a href="https://itunes.apple.com/us/app/kzsc-radio/id371572770?mt=8#"><FaApple size={100} className="fa-apple"/></a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="list-row listen">
                    <Grid.Column color="green" size={16}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        );
    }
}
{/* https://itunes.apple.com/us/app/kzsc-radio/id371572770?mt=8# */ }


export default Listen;
