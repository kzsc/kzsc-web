/*
 * src/components/Schedule/Schedule.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Button, Grid, Segment, Table, Image } from 'semantic-ui-react';
import TopMenuBar from '../TopMenuBar/TopMenuBar'
import scheduleData from './scheduleData.json'
import kzscI from '../../assets/images/kzsc.jpg'

import './Schedule.css';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "daily",
      activeDay: "Sun",
      activeMenuItem: 'daily',
      menuItems: [
        { name: 'daily', title: 'Daily Calendar' },
        { name: 'full', title: 'Full Calendar' },
        { name: 'full2', title: 'Full Calendar Custom'}
      ],
      daysOfWeek: [
        { id: "Sun", name: "Sunday" },
        { id: "Mon", name: "Monday" },
        { id: "Tue", name: "Tuesday" },
        { id: "Wed", name: "Wednesday" },
        { id: "Thu", name: "Thursday" },
        { id: "Fri", name: "Friday" },
        { id: "Sat", name: "Saturday" }
      ]
    }
  }

  handleItemClick(name) { this.setState({ activeMenuItem: name }) }

  componentWillMount() {
    let dayToday = (String(new Date())).substring(0, 3);
    this.setState({
      programSchedule: scheduleData,
      activeDay: dayToday
    })
  }

  getRegularShowsInfo(day) {
    let tuesShows = this.state.programSchedule.map(s => {
      if( s.Weekdays.includes( day ) ) {
        return (
          <Segment key={s.ShowID} className='kblue'>
            <Image src={kzscI} avatar size='tiny' floated='left' />
            {s.ShowName}<br/>
            {s.ShowUsers}<br/>
            {s.OnairTime} - {s.OffairTime}
          </Segment>
        )
      }
      return null
    })
    return tuesShows
  }

  getRegularShowsInfoTable(day) {
    let tuesShows = this.state.programSchedule.map(s => {
      if( s.Weekdays.includes( day ) ) {
        let height = 1
        return (
          <Table.Row key={s.ShowID}>
            <Table.Cell rowSpan={height} className='kblue'>
              <Segment className='kblue'>
                {s.ShowName}
              </Segment>
            </Table.Cell>
          </Table.Row>
        )
      }
      return null
    })
    return tuesShows
  }

  changeDay(day) {
    this.setState({ activeDay: day })
  }

  getDayOfWeekButtons() {
    let buttons = this.state.daysOfWeek.map(d => {
      return (
        <Grid.Column key={d.id}>
          <Button color="grey" fluid onClick={this.changeDay.bind(this, d.id)}>{d.name}</Button>
        </Grid.Column>
      )
    })
    return buttons
  }

  dailyContent() {
    return (
      <div className="div-calendar">
        <p className="calendar-text">Program Schedule &amp; Playlists</p>
        <Grid stackable>

          <Grid.Row columns='equal'>
            {this.getDayOfWeekButtons()}
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              {this.getRegularShowsInfo(this.state.activeDay)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }

  getDayOfWeekHeaderCell() {
    let headerCell = this.state.daysOfWeek.map(d => {
      return (
        <Table.HeaderCell key={d.id}>{d.name}</Table.HeaderCell>
      )
    })
    return headerCell
  }

  weeklyContent() {
    let style = {
      width: "100%",
      height: "1400px"
    }
    return(
      <iframe title="schedule" src="https://spinitron.com/radio/playlist.php?station=kzsc&amp;show=schedule&amp;ptype=d&amp;css=https://www.kzsc.org/wp-content/plugins/kzsc-spinitron/css/spinitron.css" style={style} frameBorder="0" scrolling="auto" onLoad="scro11me(this)"></iframe>
    )
  }

  weeklyContent2() {
    return (
      <div className="div-calendar">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              {this.getDayOfWeekHeaderCell()}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>

              <Table.Cell className="no-padding">
                <Table columns={1} basic='very'>
                  <Table.Body>
                    {this.getRegularShowsInfoTable("Sun")}
                  </Table.Body>
                </Table>
              </Table.Cell>

              <Table.Cell className="no-padding">
                <Table columns={1} basic='very'>
                  <Table.Body>
                    {this.getRegularShowsInfoTable("Mon")}
                  </Table.Body>
                </Table>
              </Table.Cell>

              <Table.Cell className="no-padding">
                <Table columns={1} basic='very'>
                  <Table.Body>
                    {this.getRegularShowsInfoTable("Tue")}
                  </Table.Body>
                </Table>
              </Table.Cell>

              <Table.Cell className="no-padding">
                <Table columns={1} basic='very'>
                  <Table.Body>
                    {this.getRegularShowsInfoTable("Wed")}
                  </Table.Body>
                </Table>
              </Table.Cell>

              <Table.Cell className="no-padding">
                <Table columns={1} basic='very'>
                  <Table.Body>
                    {this.getRegularShowsInfoTable("Thu")}
                  </Table.Body>
                </Table>
              </Table.Cell>

              <Table.Cell className="no-padding">
                <Table columns={1} basic='very'>
                  <Table.Body>
                    {this.getRegularShowsInfoTable("Fri")}
                  </Table.Body>
                </Table>
              </Table.Cell>

              <Table.Cell className="no-padding">
                <Table columns={1} basic='very'>
                  <Table.Body>
                    {this.getRegularShowsInfoTable("Sat")}
                  </Table.Body>
                </Table>
              </Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div className="Schedule">
        <Grid padded centered stackable>

          <TopMenuBar handleItemClick={this.handleItemClick.bind(this)} activeMenuItem={this.state.activeMenuItem} menuItems={this.state.menuItems}/>

          <Grid.Row>
            <Grid.Column computer='14' tablet='14' mobile='16'>
              {this.state.activeMenuItem === "daily" ? this.dailyContent() : null }
              {this.state.activeMenuItem === "full" ? this.weeklyContent() : null }
              {this.state.activeMenuItem === "full2" ? this.weeklyContent2() : null }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Schedule;
