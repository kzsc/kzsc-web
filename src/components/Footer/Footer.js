import React, {Component} from 'react';
import { Responsive, List, Grid} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component{

  firstColumn() {
      return (
        <div>
          <div className="footer-title">Join Our Mailing List</div>
          <form className="footer-form ui form">
            <div className="field">
              <label className="form-label">Email</label>
              <input placeholder="Email" />
            </div>
            <div className="field">
              <label className="form-label">First Name</label>
              <input placeholder="First Name" />
            </div>
            <div className="field">
              <label className="form-label">Last Name</label>
              <input placeholder="Last Name" />
            </div>
            <button type="submit" className="ui button" role="button">Subscribe</button>
          </form>
        </div>
      )
  }

  secondColumn() {
      return (
        <div className="footer-title">Top Products</div>
      )
  }

  thirdColumn() {
      return (
        <div>
          <div className="footer-title">Support Us</div>
          <div id="kzsc-support-footer" className="footer-list">
            <div className="footer-item-list">
              <NavLink to='donate'>Donate</NavLink>
            </div>
            <div className="footer-item-list">
              <NavLink to='donate'>Store</NavLink>
            </div>
            <div className="footer-item-list">
              <NavLink to='donate'>Business Underwriting</NavLink>
            </div>
          </div>
        </div>
      )
  }

  fourthColumn() {
      return (
        <div>
          <div className="footer-title">Contact Us</div>
          <div id="kzsc-contact-footer" className="footer-list">
            <div className="footer-icon-list">
              <a href="https://www.facebook.com/kzscradio" className="footer-icon-background" target="_blank">
                <i aria-hidden="true" className="icon facebook f footer-icon"></i>
              </a>
            </div>
            <div className="footer-icon-list">
              <a href="https://twitter.com/kzsc" className="footer-icon-background" target="_blank">
                <i aria-hidden="true" className="icon twitter footer-icon"></i>
              </a>
            </div>
            <div className="footer-icon-list">
              <a href="http://instagram.com/kzsc" className="footer-icon-background" target="_blank">
                <i aria-hidden="true" className="icon instagram footer-icon"></i>
              </a>
            </div>
            <div className="footer-icon-list">
              <a href="https://plus.google.com/117475604967899823150/posts" className="footer-icon-background" target="_blank">
                <i aria-hidden="true" className="icon google plus footer-icon"></i>
              </a>
            </div>
            <div className="footer-icon-list">
              <a href="http://www.youtube.com/user/kzscfm/videos" className="footer-icon-background" target="_blank">
                <i aria-hidden="true" className="icon youtube footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
      )
  }

  render(){
      return(
          <div className="footer">
              <Grid doubling columns={4} className="footer-block" divided>
                  <Grid.Row className="footer-row" columns={4}>
                      <Grid.Column className="left-column footer-item">
                          {this.firstColumn()}
                      </Grid.Column>
                      <Grid.Column className="left-column footer-item">
                          {this.secondColumn()}
                      </Grid.Column>
                      <Grid.Column className="left-column footer-item">
                          {this.thirdColumn()}
                      </Grid.Column>
                      <Grid.Column className="footer-item">
                          {this.fourthColumn()}
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </div>
      );
  }
}

export default Footer
