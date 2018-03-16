/*
 * src/components/RightSideBar/RightSideBar.js
 *
 * Copyright (c) 2018-present, KZSC Santa Cruz
 * web@kzsc.org
 */

import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import Slideshow from '../Slideshow/Slideshow';

class RightSideBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      underwritingImages: [
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/IMG_9716-1-300x150.jpg' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/SCNFC-300x150.png' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/bsc_logo_stacked-2-300x150.png' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/kelly-wachs-logo-300x150.png' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/BFCUlogoblue_1000_wTag-300x150.jpeg' }
      ],
      showImages: [
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/34c49bf5b1114a1204002f050ce534d1-300x300.jpeg', link: 'http://www.radiofreeamerica.com/show/backroads-9-kzsc-santa-cruz' },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/09/KZSC-Edible-Ad-1-e1506644994993-300x300.png', link: 'http://kzsc.fm/listen'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/02/RS-2-300x300.png', link: 'http://www.radiofreeamerica.com/show/radio-spectacular-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/image_01-1-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/santa-cruz-laboratory-for-dance-based-sciences-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/af44f83b9015b960e092eb600eba490e-300x300.jpeg', link: 'http://www.radiofreeamerica.com/show/test-of-time-2-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/NSDR-300x300.jpg', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/af44f83b9015b960e092eb600eba490e-300x300.jpeg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/NSDR-300x300.jpg', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/NSDR-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/VocesCriticas-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/voces-criticas-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/¡Que-te-Importa-300x300.png', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/VocesCriticas-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/image_01-300x300.jpg', link: ''  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/IMG_0227-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/cr8-diggers-anonymous-2-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/OldColdRiver-300x300.jpg', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/IMG_0227-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/Screen-Shot-2018-01-26-at-3.42.43-PM-300x300.png', link: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/OldColdRiver-300x300.jpg'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/09/unnamed-1-300x300.png', link: 'http://www.radiofreeamerica.com/show/super-8-1-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/IMG_20170815_223711_238-e1508213755992-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/wiki-wiki-wednesday-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/Purgatory-300x300.png', link: 'http://www.radiofreeamerica.com/show/purgatory-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/Living-in-the-80s-logo-300x300.jpg', link: 'http://kzsc.fm/80s'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/09/unnamed-e1506646563979-300x300.png', link: 'http://www.radiofreeamerica.com/show/queen-beats-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/02/imageedit_1_8357435096-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/dr-t-s-vinylorium-1-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/IMG_20170815_223711_238-e1508213755992-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/wiki-wiki-wednesday-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/10/34c49bf5b1114a1204002f050ce534d1-300x300.jpeg', link: 'http://www.radiofreeamerica.com/show/backroads-9-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2018/01/SLUGTALKnewlogo-300x300.png', link: 'http://www.radiofreeamerica.com/show/slug-talk-1-kzsc-santa-cruz'  },
        { text: '', image: 'https://mk0kzsc0r04nd5wp46sq.kinstacdn.com/wp-content/uploads/2017/11/Its-all-Good-300x300.jpg', link: 'http://www.radiofreeamerica.com/show/it-s-all-good-9-kzsc-santa-cruz'  }
      ]
    }
  }

  render() {
    return (
      <Grid stackable>

        <Grid.Row>
          <Grid.Column width={16}>
            <div className="text-align-center">
              <div className="k-h3">Support Local Businesses</div>
              <Slideshow images={this.state.underwritingImages}/>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <div className="text-align-center">
              <div className="k-h3">Featured Shows</div>
              <Slideshow images={this.state.showImages}/>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <div id="spin-wrap" className="text-align-center">
              <div className="k-h3">Recent Tracks</div>
              <iframe title="rt" id="spin-iframe" className="spin-songs" src="//spinitron.com/public/newestsong.php?num=5&amp;station=kzsc&amp;time=1&amp;tweets=1&amp;stylesheet=%2F%2Fspinitron.bitbucket.io%2Fspin.css">
              </iframe>
            </div>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

export default RightSideBar;
