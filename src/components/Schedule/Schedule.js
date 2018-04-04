/*
 * src/components/Schedule/Schedule.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Button, Grid, Segment, Table, Icon } from 'semantic-ui-react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import scheduleData from './scheduleData.json'
import axios from 'axios';

import './Schedule.css';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestShowInfo: false,
      content: "daily",
      activeDay: "Sun",
      activeItem: 'daily',
      programSchedule: [],
      menuItems: [
        { name: 'daily', title: 'Daily Calendar' },
        { name: 'full', title: 'Full Calendar' }
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

  getProgramSchedule() {
    axios.get('http://localhost:3001/spinitron').then(res => {
      let data = res.data
      this.setState({
        programSchedule: data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentWillMount() {
    let dayToday = (String(new Date())).substring(0, 3);
    this.setState({
      programSchedule: scheduleData,
      activeDay: dayToday
    })
    // this.getProgramSchedule()
  }

  convertToStandardTime(time) {
    let hhmm = time.split(":")
    let hour = hhmm[0]
    let hourNum = Number(hour)
    let min = hhmm[1]
    let returnH, returnM = min, returnAP;
    if( hourNum === 0 ) { returnH = 12; returnAP = "am" }
    if( hourNum < 12 && hourNum > 0 ) { returnH = hourNum; returnAP = "am" }
    if( hourNum === 12 ) { returnH = hour; returnAP = "pm" }
    if( hourNum > 12 ) { returnH = hour - 12; returnAP = "pm" }
    return returnH + ":" + returnM + " " + returnAP
  }

  getRegularShowsInfo(day) {
    let sortedShowList = this.state.programSchedule.map(s => {
      let onTime = this.convertToStandardTime(s.OnairTime)
      let offTime = this.convertToStandardTime(s.OffairTime)
      let showUsers = s.ShowUsers.map((dj, i) => {
        if( i === 0 ) {
          return dj.DJName
        }
        return  ', ' + dj.DJName
      })
      var obj = { ShowID: s.ShowID,
                  ShowName: s.ShowName,
                  ShowUsers: showUsers,
                  OnairTime: s.OnairTime,
                  OnTime: onTime,
                  OffTime: offTime,
                  OffairTime: s.OffairTime,
                  Weekdays: s.Weekdays }
      return obj
    })
    sortedShowList.sort(function(a, b){
      var aOnairTime = (a.OnairTime).replace(/[:]/g, "")
      var bOnairTime = (b.OnairTime).replace(/[:]/g, "")
      return aOnairTime - bOnairTime
    })

    let showsList = sortedShowList.map(s => {
      if( s.Weekdays.includes( day ) ) {
        return (
          <Segment key={s.ShowID} className='kblue'>
            <Icon size="large" name='user circle' />
            {s.ShowName}<br/>
            {s.ShowUsers}<br/>
            {s.OnTime} - {s.OffTime}
          </Segment>
        )
      }
      return null
    })
    return showsList
  }

  getRegularShowsInfoTable(day) {
    let showsList = this.state.programSchedule.map(s => {
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
    return showsList
  }

  changeDay(day) {
    this.setState({ activeDay: day })
  }

  getDayOfWeekButtons() {
    let buttons = this.state.daysOfWeek.map(d => {
      return (
        <Grid.Column key={d.id}>
          <Button className="less-padding" fluid active={this.state.activeDay === d.id} onClick={this.changeDay.bind(this, d.id)}>{d.name}</Button>
        </Grid.Column>
      )
    })
    return buttons
  }

  dailyContent() {
    return (
      <div className="div-calendar">
        <Grid stackable>

          <Grid.Row columns="7">
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

  // getDayOfWeekHeaderCell() {
  //   let headerCell = this.state.daysOfWeek.map(d => {
  //     return (
  //       <Table.HeaderCell key={d.id}>{d.name}</Table.HeaderCell>
  //     )
  //   })
  //   return headerCell
  // }

  weeklyContent() {
    let style = {
      width: "100%",
      height: "1040px"
    }
    return(
      <iframe id="weeklySchedule" title="schedule" src="https://spinitron.com/radio/playlist.php?station=kzsc&amp;show=schedule&amp;ptype=d&amp" style={style} frameBorder="0" scrolling="auto"></iframe>
    )
  }

  // getWeeklyColumns() {
  //   let columns = this.state.daysOfWeek.map(d =>
  //     <Table.Cell key={d.id} className="no-padding">
  //       <Table columns={1} basic='very'>
  //         <Table.Body>
  //           {this.getRegularShowsInfoTable(d.id)}
  //         </Table.Body>
  //       </Table>
  //     </Table.Cell>
  //   )
  //   return columns
  // }

  // weeklyContent2() {
  //   return (
  //     <div className="div-calendar">
  //       <Table celled structured>
  //         <Table.Header>
  //           <Table.Row>
  //             {this.getDayOfWeekHeaderCell()}
  //           </Table.Row>
  //         </Table.Header>
  //
  //         <Table.Body>
  //           <Table.Row>
  //             {this.getWeeklyColumns()}
  //           </Table.Row>
  //         </Table.Body>
  //       </Table>
  //     </div>
  //   );
  // }

  /* LeftSideBar Event */
  handleLeftMenuItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Grid className="Schedule" padded centered stackable>
        <Grid.Row>
          <Grid.Column width='16'>
            <LeftSideBar items={this.state.menuItems} active={this.state.activeItem} handleItemClick={this.handleLeftMenuItemClick.bind(this)} vertical={false} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width='16'>
            {this.state.activeItem === "daily" ? this.dailyContent() : null }
            {this.state.activeItem === "full" ? this.weeklyContent() : null }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Schedule;
