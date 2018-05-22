/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

import { Carousel,PullToRefresh } from 'antd-mobile';
import 'antd-mobile/lib/pull-to-refresh/style/css.js'; //获取样式

import Header from '../items/header';
import Loading from '../items/loading';
import DetailCard from '../items/detail-card';

import {getEventType, getEventList} from "../functional/common";

import {selectDateType} from '../../action/action';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: '3.2rem',
            data: ['1', '2', '3', '4'], //存放图片的数组
            week: [], //日期数组
            category: [], //事件数组
            dayIndex: 0,
            typeIndex: 0,
            detailArr: [], //存放详情参数的数组
            refreshing: false,
        }
    }
    componentWillMount() {
        document.body.style.background = '#fff';
        let dateArr = [];

        for(let i = 0;i < 7;) {
            let week = moment(new Date()).add(i, 'days').format('dddd').substring(0,3);
            let date = moment(new Date()).add(i, 'days').format('MM.DD');
            dateArr.push({'week': week, 'date': date});
            i ++;
        }

        this.setState({week: dateArr});
    }
    componentDidMount() {
        let eventArr = [];

        getEventType().then(value => {
            let data = value.event_type_list;
            data.map(res => {
                eventArr.push({'title': res});
            });
            this.setState({category: eventArr});
            //默认初始化事件列表
            let fetch = getEventList(this.state.week, eventArr, 0, 0);
            this.props.selectDateType({fetchPost: fetch});
        });
    }
    //点击切换时间
    dayClick(index) {
        this.setState({
            dayIndex: index
        });

        //点击更新事件列表
        let fetch = getEventList(this.state.week, this.state.category, index, this.state.typeIndex);
        this.props.selectDateType({fetchPost: fetch});
    }
    //点击切换事件类型
    typeClick(index) {
        this.setState({
            typeIndex: index
        });

        //点击更新事件列表
        let fetch = getEventList(this.state.week, this.state.category, this.state.dayIndex, index);
        this.props.selectDateType({fetchPost: fetch});
    }

    render() {
        return(
            <div className="home">
                <Header/>
                {/*轮播图*/}
                <div style={{height: '3.3rem',background: '#f4f4f4'}}>
                    <Carousel
                        className="mars-carousel"
                        dots={true}
                        dotStyle={{
                            background: 'transparent',
                            width: '.12rem',
                            height: '.12rem',
                            margin: '0 .1rem',
                            display: 'block',
                            borderRadius: '50%',
                            border: '1px solid rgba(0,0,0,0.5)'
                        }}
                        dotActiveStyle={{
                            background: 'rgba(0,0,0,0.5)',
                            width: '.12rem',
                            height: '.12rem',
                            margin: '0 .1rem',
                            display: 'block',
                            borderRadius: '50%',
                            border: '1px solid transparent'
                        }}
                        selectedIndex={0}
                        autoplay={true}
                        infinite
                    >
                        {this.state.data.map(val => {
                            return(
                                <img
                                    key={val}
                                    style={{height: this.state.imgHeight}}
                                    src={require(`../../../images/${val}.jpeg`)}
                                    alt=""
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            )
                        })}
                    </Carousel>
                </div>

                {/*中间选择区域*/}
                <div className="whiteBg">
                    {/*日期选择*/}
                    <div className="week-list-box">
                        <ul className="week-list">
                            {this.state.week.map((val,i) => {
                                let dayStyle = i === this.state.dayIndex ? 'active' : '';
                                return(
                                    <li
                                        key={i}
                                        className={dayStyle}
                                        onClick={this.dayClick.bind(this,i)}
                                    >
                                        <p>{val.week}</p>
                                        <p>{val.date}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/*品类选择*/}
                    <div className="category-list-box">
                        <ul className="category-list">
                            {this.state.category.map((val,i) => {
                                let typeStyle = i === this.state.typeIndex ? 'active' : '';
                                return(
                                    <li
                                        key={i}
                                        className={typeStyle}
                                        onClick={this.typeClick.bind(this,i)}
                                    >
                                        <span>{val.title}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        {/*底部选择线*/}
                        <div
                            className="category-line"
                            style={{
                                left: 4 + 25 * this.state.typeIndex + '%'
                            }}
                        ></div>
                </div>
                </div>
                {/*获取事件详情*/}
                <PullToRefresh
                    style={{
                        background: '#fff',
                        maxHeight: '10.88rem',
                        overflow: 'auto'
                    }}
                    refreshing={this.state.refreshing}
                    direction="down"
                    distanceToRefresh={50}
                    onRefresh={() => {
                        this.setState({ refreshing: true });

                        let fetch =
                            getEventList(this.state.week, this.state.category, this.state.dayIndex, this.state.typeIndex);
                        this.props.selectDateType({isRefresh: true,fetchPost: fetch}).then(() => {
                            this.setState({ refreshing: false });
                        });
                    }}
                    indicator={{
                        activate: 'Release to complete',
                        deactivate: 'Pull to refresh',
                        finish: 'Refreshed',
                        release:
                            <div style={{transform: 'translateY(-20px)'}}>
                                <img style={{width: '30px',height: '30px'}} src={require("../../../images/loading.gif")} alt=""/>
                            </div>
                    }}
                >
                    {(() => {
                        /*通过loading指针，在接口未请求到数据前显示Loading组件*/
                        if(this.props.loading) {
                            return <Loading style={{
                                width: '100%',
                                height: '5.44rem',
                                position: 'relative'
                            }}/>;
                        }else{
                            /*判断goodsList是否存在,对store里的数据进行遍历渲染*/
                            if(this.props.goodsList) {
                                if(this.props.goodsList.length > 0) {
                                    return (this.props.goodsList.map((res,i) =>
                                        (
                                            <DetailCard
                                                key={i}
                                                imgUrl={res.imgUrl}
                                                name={res.name}
                                                heartNum={res.thumb_up_num}
                                                addr={res.address}
                                                time={res.time}
                                                price={res.price}
                                                eventId={res.event_id}
                                                commodityId={res.commodity_id}
                                                thumb_up={res.thumb_up}
                                                join_in={res.join_in}
                                                isProduct={false}
                                            />
                                        )
                                    ))
                                }else{
                                    return (
                                        <div style={{
                                            textAlign: 'center',
                                            padding: '1rem 0 4rem 0',
                                        }}>Sorry! There's no Data.</div>
                                    )

                                }
                            }else{
                                return null;
                            }
                        }
                    })()}

                </PullToRefresh>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        selectDateType
    },dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);