import React,{Component} from 'react';
import NumChange from '../functional/numChange';

class DetailCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isInterest: false,
            isReserved: false
        }

    }
    handleChange(e) {
        console.log(e) //e为input框里的值
    }
    interestToggle() {
        this.setState({isInterest: !this.state.isInterest});
    }
    reserveToggle() {
        this.setState({isReserved: !this.state.isReserved});
    }
    render() {
        let {imgUrl,name,heartNum,addr,time,price} = this.props;

        return(
            <div className="detail-card">
                <div
                    className="img-container"
                    onClick={this.props.onClick}
                    style={{background: `url(${imgUrl}) no-repeat`,}}
                >
                    {/*<img src={imgUrl} alt=""/>*/}
                    {/*<div style={{background: `url(`${imgUrl}`) no-repeat`,backgroundSize: 'cover'}}></div>*/}
                </div>
                <div className="info">
                    <div className="top">
                        <p>{name}</p>
                        <div>
                            <span
                                className={this.state.isInterest ? "iconfont icon-full" : "iconfont icon-heart"}
                                onClick={this.interestToggle.bind(this)}>
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
                    <p className="price">${price}</p>
                    <NumChange
                        handleChange={this.handleChange.bind(this)}
                    />
                    <div
                        className={this.state.isReserved ? "reserve-btn reserved" : "reserve-btn reserve"}
                        onClick={this.reserveToggle.bind(this)}
                    >Reserved</div>
                </div>
            </div>
        )
    }
}

export default DetailCard;