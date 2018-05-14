import React,{Component} from 'react';
import TopBar from '../items/topBar';
import PropTypes from 'prop-types';


class Partner extends Component {
    componentWillMount() {
        document.body.style.background = '#f4f4f4';
    }
    goBack() {
        this.context.router.history.goBack();
    }
    render() {
        return(
            <div className="agreement">
                <TopBar goBack={this.goBack.bind(this)}/>

                <article>
                    <header>
                        <h3>Partnership Program</h3>
                        <p>April 15, 2018</p>
                    </header>
                    <section>
                        <p className="paragraph">
                            Marstail helps local business reach their targeted consumers who are ready
                            to purchase in local communities. We welcome all enquiries about partnership
                            opportunities. If you or your business is interested in joining forces with
                            Marstail, please contact us directly.
                        </p>
                        <p className="paragraph">
                            You can reach our Business Development team through Account - > Contact Us in our App.
                        </p>
                        <p className="paragraph">To download Marstail App, please go to:</p>
                        <p className="paragraph">
                            You can also email us at <span className="email-address">themarstail@gmail.com</span>
                        </p>
                    </section>

                </article>

            </div>
        )
    }
}

Partner.contextTypes = {
    router: PropTypes.object
};

export default Partner;