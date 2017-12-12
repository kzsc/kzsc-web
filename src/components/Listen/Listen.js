import React, {Component} from 'react';
import {Grid, Table } from 'semantic-ui-react';
import FaApple from 'react-icons/lib/fa/apple';
import FaSoundcloud from 'react-icons/lib/fa/soundcloud';
import FaAndroid from 'react-icons/lib/fa/android';
import './Listen.css';

class Listen extends Component{
    render(){
        return(
        <div>
            <Grid className="list-content">
                <Grid.Row className="list-row listen">
                    <Grid.Column  size={16}>
                        <div className="table-desc">
                            <h1> Listen to KZSC 88.1 FM </h1>
                            <p>KZSC doesn’t just broadcast to 3 million people over the radio airwaves at 88.1FM, we also broadcast to the entire world over the internet tubes! This table below explains how you can tune in, even when you’re not in lovely Santa Cruz.</p>
                            <h2> KZSC Main Stream </h2>
                            <p>You can use one of the two different quality webstreams listed below, for iTunes search under “College Radio”, or just press the red PLAY button to the right.</p>
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
                <h2> Also, listen to KZSC 88.1FM on Android and iOS </h2>
                <p className="table-desc"> On the iPhone, KZSC Radio is simple and easy to use – one click and you’re listening! You’ll have access to the main station, our new secondary webstream, and current playlist information. </p>
                <Grid.Row className="list-row listen">
                    <Grid.Column  size={16}>
                        <a href="https://play.google.com/store/apps/details?id=org.kzsc.streaming"><FaAndroid size={150} className="fa-android"/></a>
                        <a href="https://itunes.apple.com/us/app/kzsc-radio/id371572770?mt=8#"><FaApple size={150} className="fa-apple"/></a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="list-row listen2">
                    <Grid.Column color="white" size={16}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        );
    }
}

// The KZSC Radio app is a free Internet radio streaming service tuned to community radio station 88.1 FM KZSC, featuring award-winning music programming, UCSC sports, local news and stimulating conversation.

export default Listen;
