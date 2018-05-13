import React,{Component} from 'react';
import TopBar from '../items/topBar';
import PropTypes from 'prop-types';


class AboutUs extends Component {
    goBack() {
        this.context.router.history.goBack();
    }
    render() {
        return(
            <div className="agreement">
                <TopBar goBack={this.goBack.bind(this)}/>

                <article>
                    <header>
                        <h3>About Us</h3>
                        <p>April 15, 2018</p>
                    </header>
                    <section>
                        <div className="caption">Our purpose:</div>
                        <p>To help people and local businesses stay connected. </p>
                    </section>
                    <section>
                        <div className="caption">A few things you need to know about us:</div>
                        <ul>
                            <li>
                                Marstail was founded in 2018 to help people get their favorite food in
                                their local community delivered right to their door steps.
                            </li>
                            <li>
                                Every business owner and user can set up a free account. You can access
                                Marstail by the Marstail mobile app and its website.
                            </li>
                            <li>
                                Marstail is devoted to help create a stronger personal connection between
                                people and local businesses.
                            </li>
                        </ul>

                    </section>

                </article>

            </div>
        )
    }
}

AboutUs.contextTypes = {
    router: PropTypes.object
};

export default AboutUs;