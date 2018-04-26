/**
 * Created by Administrator on 2018/4/13.
 */
import React,{Component} from 'react';
import Header from '../items/header';
import DetailCard from '../items/detail-card';

import { Carousel,Tabs } from 'antd-mobile';
import {fetchJson} from "../functional/common";

import {Redirect} from 'react-router-dom';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: '3.2rem',
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            week: [
                {week: 'Mon',day: '01.01'},
                {week: 'Tue',day: '01.02'},
                {week: 'Wed',day: '01.03'},
                {week: 'Thu',day: '01.04'},
                {week: 'Fri',day: '01.05'},
                {week: 'Sat',day: '01.06'},
                {week: 'Sun',day: '01.07'},
            ],
            category: [
                {title: 'Food'},
                {title: 'Lunch'},
                {title: 'Dinner'},
                {title: 'Market'}
            ],
            dayIndex: 0,
            typeIndex: 0
        }
    }
    componentDidMount() {
        fetchJson('/user/getEventType',{},msg => {
            console.log(msg);
        });

    }
    dayClick(index) {
        this.setState({
            dayIndex: index
        });
    }
    typeClick(index) {
        this.setState({
            typeIndex: index
        });
    }
    render() {
        return(
            <div className="home">
                <Header/>
                {/*轮播图*/}
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
                {/*中间选择区域*/}
                <div className="whiteBg">
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
                                        <p>{val.day}</p>
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
                    {/*<div className="category-list-box">*/}
                        {/*<Tabs*/}
                            {/*tabs={this.state.category}*/}
                            {/*tabDirection={'horizontal'}*/}
                            {/*tabBarTextStyle={{fontSize: '.4rem'}}*/}
                            {/*tabBarActiveTextColor={'#009688'}*/}
                            {/*tabBarInactiveTextColor={'#000'}*/}
                            {/*tabBarUnderlineStyle={{borderBottom:'.1rem solid #009688'}}*/}
                            {/*renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}*/}
                        {/*>*/}

                        {/*</Tabs>*/}

                    {/*</div>*/}

                </div>
                {/*获取事件详情*/}

                <DetailCard
                    imgUrl={`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`}
                    name={'Food1'}
                    heartNum={35}
                    addr={'123 Street, Jersey City'}
                    time={'2018.01.01 - 12:00 PM - 12:30 PM'}
                    price={15}
                />

                <DetailCard
                    imgUrl={`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`}
                    name={'Food1'}
                    heartNum={35}
                    addr={'123 Street, Jersey City'}
                    time={'2018.01.01 - 12:00 PM - 12:30 PM'}
                    price={15}
                />



            </div>
        )
    }
}

export default Home;