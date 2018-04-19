import React, {Component} from 'react'
import {View,Dimensions,Text,Image} from "react-native"
import PropTypes from 'prop-types'
/**
 * @param {Number} starWith
 * @param {Number} starNumber
 * @param {本地图片地址} starImage
 * @param {Number} starSpace
 * @constructor 单个星星宽度 星星个数 间隔大小
 */
export default class SFSatrs extends Component{
    static propTypes = {
        starNumber:PropTypes.number,
        starSpace:PropTypes.number,
        starWith:PropTypes.number,
        starImage:PropTypes.object,

    }
    static defaultProps={
           starNumber:5,
           starSpace:5,
    }
    constructor(props){
        super(props)
    }
    render(){
        const {starNumber,starWith,starSpace}=this.props
        return (
                <View style={{
                    width:
                    starNumber*starWith+
                    starSpace*(starNumber+1)
                    +(5-starNumber)*starWith
                    +starSpace*(5-starNumber),

                    height:starWith,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center' ,
                }}>
                    {this.renderChirld()}
                </View>
        )
    }
    
    renderChirld=()=>{
        var data = [];
        var w = this.props.starWith
        var h = w;
        for(var j = 0;j <this.props.starNumber; j++) data.push(
            <Image key={j} style={{
                width: w,
                height: h,
                marginLeft: this.props.starSpace
            }}
                   source={this.props.starImage}
                   resizeMode='cover'
            />
        )
        return data;
    }
}