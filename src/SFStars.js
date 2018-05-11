import React, {Component} from 'react'
import {View,Dimensions,Text,Image,TouchableWithoutFeedback,PanResponder} from "react-native"
import PropTypes from 'prop-types'
const  MaxStar = 5
/**
 * @param {Number} starWith
 * @param {Number} starNumber
 * @param {Number} starImage
 * @param {Number} starBgImage
 * @param {bool} starDisabled
 * @param {Number} starSpace
 * @constructor 单个星星宽度 星星个数 选中图片 非选中图片 间隔大小 星星是否可以点击
 */
export default class SFStars extends Component{


    static propTypes = {
        starNumber:PropTypes.number,
        starSpace:PropTypes.number,
        starWith:PropTypes.number,
        starImage:PropTypes.number,
        starBgImage:PropTypes.number,
        starSelectIndex:PropTypes.func,
        starDisabled:PropTypes.bool

    }

    static defaultProps={
           starNumber:0,
           starSpace:MaxStar,
           starDisabled:true
    }
    componentWillMount(){
        var data=[]
        if(this.props.starNumber==0){
            for(var j=0;j<MaxStar-this.props.starNumber;j++){
                data.push(false)
            }
        }else {
            for(var i=0;i<this.props.starNumber;i++){
                data.push(true)
            }
            for(var j=0;j<MaxStar-this.props.starNumber;j++){
                data.push(false)
            }
        }

        this.setState({
            isSelect:data
        })

    }
    constructor(props){
        super(props)
        this.state={
            isSelect:[]
        }

    }
    render(){
        const {starNumber,starWith,starSpace}=this.props
        return (

                <View style={{
                    width:
                    starNumber*starWith+
                    starSpace*(starNumber+1)
                    +(MaxStar-starNumber)*starWith
                    +starSpace*(MaxStar-starNumber),
                    height:starWith,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center' ,
                }}
                >
                    {this.renderChirld()}
                </View>

        )
    }
    
    renderChirld=()=>{

        var data = [];
        var w = this.props.starWith
        var h = w;
        if(this.props.starNumber>0){
            for(var j = 0;j <this.props.starNumber; j++)
                data.push(
                    <TouchableWithoutFeedback key={j} disabled={this.props.starDisabled} onPress={this.starClick.bind(this,j)}>
                        <Image style={{
                            width: w,
                            height: h,
                            marginLeft: this.props.starSpace
                        }}
                               source={this.state.isSelect[j]==true ?this.props.starImage:this.props.starBgImage}
                               resizeMode='cover'
                        />
                    </TouchableWithoutFeedback>
                )
        }

        if(MaxStar-this.props.starNumber>0){
            var bgStar=MaxStar-this.props.starNumber
            for(var j = 0;j <bgStar; j++) data.push(
                <TouchableWithoutFeedback key={j+this.props.starNumber} disabled={this.props.starDisabled} onPress={this.starClick.bind(this,j+this.props.starNumber)}>
                <Image  style={{
                    width: w,
                    height: h,
                    marginLeft: this.props.starSpace
                }}
                       source={this.state.isSelect[j+this.props.starNumber]==true ?this.props.starImage:this.props.starBgImage}
                       resizeMode='cover'
                />
                </TouchableWithoutFeedback>
            )
        }
        return data;
    }
    starClick=(index)=>{
        var data=[]

        for(var i = 0;i<index+1;i++){
            data.push(true)
        }
        for(var j=0;j<MaxStar-index;j++){
            data.push(false)
        }
        this.setState({
            isSelect:data
        })
        if(this.props.starSelectIndex){
            this.props.starSelectIndex(index)
        }

    }
}