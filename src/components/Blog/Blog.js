import React, { Component } from 'react';
import { Container, Button, Form, Grid, Column } from 'semantic-ui-react';
import './Blog.css';

import imgDefault from './kzsc.jpg';
var i = Math.floor(Math.random() * 93) + 1;






class Blog extends Component {
    constructor(props) {
        super(props);

    }










    blogContent() {
      i = (i+7)%93;
        return (
            <div className="div-blog">
                <div class = "ui stackable four column grid">
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={"https://www.kzsc.org/wp-content/uploads/2017/10/DB_Day-2-Katie-Laskowska-Drop-1-10-1030x686.jpg"} />
                                {/*<div className="div-beneath-img">

                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                              <h3>Dirtybird Campout: Summer Camp in October	</h3>
                              <h5>by KZSC Web Team | 10.11.2017</h5>

                              <p> Miss the days of tie dying, tug of rope, color wars,
                              and the anticipated talent show? Dirtybird Campout was all that and more.
                              </p>

                              <a class="ui orange label">Festival</a>
                              <a class="ui yellow label">RPM</a>
                              <a class="ui green label">Events</a>




                            </div>


                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={"https://www.kzsc.org/wp-content/uploads/2017/10/Screen-Shot-2017-10-26-at-19.59.21.png"} />
                                {/*<div className="div-beneath-img">

                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                              <h3>BigMoney Lil Sheik interview w/ RIZ aka RSD 7.30.17</h3>
                              <h5>by Rizal Aliga | 9.29.2017</h5>

                              <p> I caught up with Lil Sheik of South Richmond,
                               CA, during his YWN tour stop in Santa Cruz, CA with SOB X RBE.
                              </p>

                              <a class="ui orange label">Main</a>

                            </div>


                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={"https://www.kzsc.org/wp-content/uploads/2017/09/Screen-Shot-2017-09-29-at-16.08.55.png"} />
                                {/*<div className="div-beneath-img">

                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                              <h3>DJ Shellheart interview w/ RIZ aka RSD @ 6th Annual Hiero Day 2017 (9.4.17)</h3>
                              <h5>by Rizal Aliga | 9.28.2017</h5>

                              <p> I caught up with DJ Shellheart during Hiero Day 2017!
                              </p>

                              <a class="ui orange label">Main</a>

                            </div>


                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={"https://lh3.googleusercontent.com/--T9gVhe7vcc/Wfa4gVs-5fI/AAAAAAAAgu0/aiF0sWcoG80zlfhSL6HWCXEAx9NWSoZSgCHMYCw/s0/2017-10-29_22-28-30.png"} />
                                {/*<div className="div-beneath-img">

                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                              <h3>INTERVIEWS: LIFE OUT OF BALANCE – Belgian band We Stood Like Kings Releases New Koyaanisqatsi Soundtrack</h3>
                              <h5>by John Malkin | 9.27.2017</h5>

                              <p>  In 1982 the film Koyaanisqatsi had its first
                               public screening and quickly became an influential classic.
                              </p>

                              <a class="ui orange label">Main</a>

                            </div>


                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={"https://www.kzsc.org/wp-content/uploads/2017/10/Screen-Shot-2017-10-26-at-19.59.21.png"} />
                                {/*<div className="div-beneath-img">

                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                              <h3>BigMoney Lil Sheik interview w/ RIZ aka RSD 7.30.17</h3>
                              <h5>by Rizal Aliga</h5>

                              <p> I caught up with Lil Sheik of South Richmond,
                               CA, during his YWN tour stop in Santa Cruz, CA with SOB X RBE.
                              </p>

                              <a class="ui orange label">Main</a>

                            </div>


                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={"https://www.kzsc.org/wp-content/uploads/2017/10/Screen-Shot-2017-10-26-at-19.59.21.png"} />
                                {/*<div className="div-beneath-img">

                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                              <h3>BigMoney Lil Sheik interview w/ RIZ aka RSD 7.30.17</h3>
                              <h5>by Rizal Aliga</h5>

                              <p> I caught up with Lil Sheik of South Richmond,
                               CA, during his YWN tour stop in Santa Cruz, CA with SOB X RBE.
                              </p>

                              <a class="ui orange label">Main</a>

                            </div>


                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={require('./albumart/' + (((i+2)%93)+1) + '.jpg')} />
                                {/*<div className="div-beneath-img">
                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                            </div>
                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={require('./albumart/' + (((i+3)%93)+1) + '.jpg')} />
                                {/*<div className="div-beneath-img">
                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">

                            </div>
                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={require('./albumart/' + (((i+4)%93)+1) + '.jpg')} />
                                {/*<div className="div-beneath-img">
                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">


                            </div>
                        </div>
                        <div class="column">
                            <div className="blogimage-container">
                                <img className="blog-images" src={require('./albumart/' + (((i+5)%93)+1) + '.jpg')} />
                                {/*<div className="div-beneath-img">
                                        <Button color="red"> Add </Button>
                                    </div>*/}
                            </div>
                            <div className="blogtext-container">


                            </div>
                        </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <Container className="blog-container">
                <span className="content-header"> From the KZSC Blog </span>
                {this.blogContent()}


                <div className="div-load-more-blogs">
                    <Button color="red">Load more</Button>
                </div>

            </Container>
        );
    }
}

export default Blog;
