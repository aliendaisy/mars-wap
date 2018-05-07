/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from 'moment';

import { Carousel,PullToRefresh } from 'antd-mobile';
import 'antd-mobile/lib/pull-to-refresh/style/css.js'; //获取样式

import Header from '../items/header';
import Loading from '../items/loading';
import DetailCard from '../items/detail-card';

import {getEventType,getEventList} from "../functional/common";

import {selectDateType} from '../../action/action';
import {bindActionCreators} from 'redux';

const year = new Date().getFullYear();
const commonPath = "http://www.marstail.com:20000";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: '3.2rem',
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            week: [], //日期数组
            category: [], //事件数组
            dayIndex: 0,
            typeIndex: 0,
            detailArr: [], //存放详情参数的数组
            toProduct: false, //是否跳转详情页的指针
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
            let fetch = getEventList(new Date(), data[0]);
            this.props.selectDateType({fetchPost: fetch});
        });
    }
    //点击切换时间
    dayClick(index) {
        this.setState({
            dayIndex: index
        });

        let month = parseInt(this.state.week[index].date.split('.')[0]) - 1;
        let day = parseInt(this.state.week[index].date.split('.')[1]);

        let date = new Date(year,month,day);
        let event = this.state.category[this.state.typeIndex].title; //事件类型

        //点击更新事件列表
        let fetch = getEventList(date, event);
        this.props.selectDateType({fetchPost: fetch});
    }
    //点击切换事件类型
    typeClick(index) {
        this.setState({
            typeIndex: index
        });

        let month = parseInt(this.state.week[this.state.dayIndex].date.split('.')[0]) - 1;
        let day = parseInt(this.state.week[this.state.dayIndex].date.split('.')[1]);

        let date = new Date(year,month,day);
        let event = this.state.category[index].title; //事件类型

        //点击更新事件列表
        let fetch = getEventList(date, event);
        this.props.selectDateType({fetchPost: fetch});
    }

    toProduct() {
        this.setState({toProduct: true});
    }
    render() {
        if(this.state.toProduct) {
            return <Redirect push to="/product"/>
        }

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
                                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
                <div className="whiteBg" style={{position: 'relative',zIndex: 3}}>
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
                    </div>
                </div>
                {/*获取事件详情*/}
                <PullToRefresh
                    style={{
                        background: '#fff',
                        maxHeight: 'calc(10.88rem + 25px)',
                        position: 'relative',
                        zIndex: 2
                    }}
                    direction="down"
                    distanceToRefresh="50"
                    onRefresh={() => {
                        let month = parseInt(this.state.week[this.state.dayIndex].date.split('.')[0]) - 1;
                        let day = parseInt(this.state.week[this.state.dayIndex].date.split('.')[1]);

                        let date = new Date(year,month,day);
                        let event = this.state.category[this.state.typeIndex].title; //事件类型

                        let fetch = getEventList(date, event);
                        this.props.selectDateType({isRefresh: true,fetchPost: fetch});
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
                            return <Loading/>;
                        }else{
                            /*判断goodsList是否存在,对store里的数据进行遍历渲染*/
                            if(this.props.goodsList) {
                                if(this.props.goodsList.length > 0) {
                                    return (this.props.goodsList.map((res,i) => {
                                        return(
                                            <DetailCard
                                                key={i}
                                                onClick={this.toProduct.bind(this)}
                                                imgUrl={`${commonPath}${res.context.url}`}
                                                name={res.context.name}
                                                heartNum={res.context.thumb_up_num}
                                                addr={res.address}
                                                time={`${year}.${this.state.week[this.state.dayIndex].date}-${res.start_time}-${res.end_time}`}
                                                price={res.context.price}
                                            />
                                        )
                                    }))
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
    // selectDate: (dispatch,getDate) => {
    //     dispatch(selectDate((dispatch,getDate)));
    // }
    return bindActionCreators({
        selectDateType
    },dispatch);

};

export default connect(mapStateToProps,mapDispatchToProps)(Home);