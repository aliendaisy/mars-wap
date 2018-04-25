import React,{Component} from 'react';
import NumChange from '../functional/numChange';

class DetailCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            class: 'icon-heart'
        }

    }
    handleChange(e) {
        console.log(e) //e为input框里的值
    }
    interest() {
        this.setState({class: 'icon-full'});
    }
    render() {
        let {imgUrl,name,heartNum,addr,time,price} = this.props;

        return(
            <div className="detail-card">
                <div className="img-container">
                    <img src={imgUrl} alt=""/>
                </div>
                <div className="info">
                    <div className="top">
                        <p>{name}</p>
                        <div>
                            <span className={"iconfont " + this.state.class} onClick={this.interest.bind(this)}></span>
                            <p className="heart">{heartNum}</p>
                            <span className="iconfont icon-share"></span>
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
                    <div className="reserved">Reserved</div>
                </div>
            </div>
        )
    }
}

export default DetailCard;