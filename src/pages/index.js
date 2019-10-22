import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'


import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Hayden Schultz"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h1>Hi, I'm Hayden,</h1>
                        </header>
                        <h2>A passionate web developer who will quickly and cost-effectively solve problems and, consistently deliver a quality product.</h2>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </section>
                <section id="one">
                        <h2>Skills</h2>
                        <div className="Skills">
                        JavaScript
                        <br></br>
                        React
                        <br></br>
                        Node.js
                        <br></br>
                        Gatsby.js
                        <br></br>
                        Express
                        <br></br>
                        Python
                        <br></br>
                        JQuery
                    </div>
                    <div className="Skills">
                        CSS
                        <br></br>
                        HTML
                        <br></br>
                        Typescript
                        <br></br>
                        EJS
                        <br></br>
                        ES6
                        <br></br>
                        JSX
                        <br></br>
                        Git
                        </div>
                    <div className="Skills">
                        AJAX
                        <br></br>
                        Axios
                        <br></br>
                        Fetch
                        <br></br>
                        Phaser.io
                        <br></br>
                        Bootstrap
                        <br></br>
                        Materialize
                        <br></br>
                        Heroku
                        </div>
                    <div className="Skills">
                        SQL
                        <br></br>
                        PostgreSQL
                        <br></br>
                        Sequelize
                        <br></br>
                        MongoDB
                        <br></br>
                        Mongoose
                        <br></br>
                        Django
                        <br></br>
                        Material-UI
                </div>
              </section>
              <section id="one">
              <div className="">
                <h2 className="AboutTitles">Methodologies</h2>
                <div className="Methods">Object Oriented Programming | MVC Pattern  </div>
                <div className="Methods">Authentication (OAuth/Sesssions/Tokens)  </div>
                <div className="Methods">Responsive Design | RESTful Routing</div>
                <div className="Methods">Test-Driven Development | CRUD Operations</div>
            </div>
              </section>
                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Please don't hesitate to reach out. I love connecting with other folks who are passionate about tech.</p>
                        <div id="footer">
                    <div className="row">
                        <div class="3u 12u$(small)"><ul class="labeled-icons"><li><h1><a href="https://drive.google.com/file/d/1xjT9XOI_r7VLvjETdyI0Uw8S85zV7qTR/view" class="icon fa-file"><span class="label">Resume</span></a></h1></li></ul></div>
                        <div class="3u 12u$(small)"><ul class="labeled-icons"><li><h1><a href="https://github.com/kellogsfrost" class="icon fa-github"><span class="label">Github</span></a></h1></li></ul></div>
                        <div class="3u 12u$(small)"><ul class="labeled-icons"><li><h1><a href="https://www.linkedin.com/in/hayden-schultz/" class="icon fa-linkedin"><span class="label">Linked In</span></a></h1></li></ul></div>
                    </div>
                    </div>
                        </section>
                    </div>

            </Layout>
        )
    }
}

export default HomeIndex