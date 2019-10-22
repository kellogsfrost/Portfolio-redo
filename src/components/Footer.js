import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://drive.google.com/file/d/1xjT9XOI_r7VLvjETdyI0Uw8S85zV7qTR/view" className="icon fa-file" target="blank"><span className="label">Resume</span></a></li>
                        <li><a href="https://github.com/kellogsfrost" className="icon fa-github" target="blank"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/hayden-schultz/" target="blank" className="icon fa-linkedin"><span className="label">Linkdin</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
