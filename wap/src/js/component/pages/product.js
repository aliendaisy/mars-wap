import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../items/header';
import DetailCard from '../items/detail-card';

import {commonPath} from '../../reducer/reducer';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        document.body.style.background = '#fff';
    }

    componentDidMount() {

    }

    render() {
        let detail = this.props.detail ? this.props.detail : JSON.parse(localStorage.getItem('detail'));
        return(
            <div className="product">
                <Header/>
                <div className="greyBg">
                    <DetailCard
                        imgUrl={detail.imgUrl}
                        name={detail.name}
                        heartNum={detail.thumb_up_num}
                        addr={detail.address}
                        time={detail.time}
                        price={detail.price}
                        eventId={detail.event_id}
                        commodityId={detail.commodity_id}
                        thumb_up={detail.thumb_up}
                        join_in={detail.join_in}
                        isProduct={true} //点击是否跳转页面的指针
                    />
                    <div className="label-thin">
                        <div className="provider">
                            <img src={detail.provider_avatar} alt=""/>
                            <p>{detail.provider}</p>
                        </div>
                        <Link to="/download">
                            <p className="chat">Chat<span className="iconfont icon-minus"></span></p>
                        </Link>
                    </div>
                    <Link to="/download">
                        <div className="label-thin">
                            <p>Who is in</p>
                            <div className="join-list-box">
                                <div className="join-list">
                                    {(() => {
                                        if(detail.join_list && detail.join_list.length > 0) {
                                            return detail.join_list.map((res) => (
                                                <img key={res.c_id} src={`${commonPath}${res.header}`} alt=""/>
                                            ));
                                        }
                                    })()}
                                </div>
                                <span className="iconfont icon-right"></span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="describe">
                    {detail.describe}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    console.log(state);
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({

    },dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(Product);