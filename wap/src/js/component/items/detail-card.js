import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import NumChange from '../functional/numChange';

import {ShowDetail} from '../../action/action';


class DetailCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isInterest: false,
            isReserved: false
        }

    }
    toProduct() {
        // console.log(ei,ci);
        // let fetch = getEventDetail('798758309@qq.com',ei,ci);
        // let {imgUrl,name,heartNum,addr,time,price,eventId,commodityId} = {...this.props};
        //
        // console.log({...this.props})
        if(!this.props.isProduct) {
            this.context.router.history.push('/product');
        }

        this.props.ShowDetail({...this.props});
    }
    handleChange(e) {
        // console.log(e) //e为input框里的值


    }
    interestToggle(e) {
        this.setState({isInterest: !this.state.isInterest});
        console.log(e)
    }
    eventToggle(e) {
        this.setState({isReserved: !this.state.isReserved});
        console.log(e)
    }
    render() {
        let {imgUrl,name,heartNum,addr,time,price,eventId,commodityId} = this.props;
        return(
            <div className="detail-card">
                <div
                    className="img-container"
                    style={{background: `url(${imgUrl}) no-repeat`,}}
                    onClick={this.toProduct.bind(this)}
                >
                </div>
                <div className="info">
                    <div className="top">
                        <p>{name}</p>
                        <div>
                            <span
                                className={this.state.isInterest ? "iconfont icon-full" : "iconfont icon-heart"}
                                onClick={this.interestToggle.bind(this,eventId)}>
                            </span>
                            <p className="heart">{heartNum}</p>
                            <span className="iconfont icon-share">
                            </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>{addr}</p>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="order">
                    <p className="price">${parseInt(price) / 1000}</p>
                    <NumChange
                        handleChange={this.handleChange.bind(this)}
                    />
                    <div
                        className={this.state.isReserved ? "reserve-btn reserved" : "reserve-btn reserve"}
                        onClick={this.eventToggle.bind(this,eventId)}
                    >Reserved</div>
                </div>
            </div>
        )
    }
}

DetailCard.contextTypes = {
    router: PropTypes.object
};

const mapStateToProps = (state,props) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        ShowDetail
    },dispatch);

};

export default connect(mapStateToProps,mapDispatchToProps)(DetailCard);
