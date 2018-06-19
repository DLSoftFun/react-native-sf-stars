# react-native-sf-stars
&
# 安装
* npm i react-native-sf-stars

# Props
|  parameter  |  type  |  required  |   description  |  default  |
|:-----|:-----|:-----|:-----|:-----|
|starWith|Number|yes|单个星星的宽度|null|
|starNumber|Number|yes|选中星星的个数|0|
|starImage|Number|yes|选中星星的图片|null|
|starBgImage|Number|yes|未选中星星的图片|null|
|starDisabled|bool|no|是否可以点击星星|true|
|starSpace|Number|no|星星之间的间距|5|
|style|object|no|可设置除宽度,高度,布局外的属性(例如:margin)|null|
|MaxStar|Number|yes|最大星星个数|5|

# Methods
|  Methods  |  Params  |  Param Types  |   description  |  Example  |
|:-----|:-----|:-----|:-----|:-----|
|starSelectIndex|index|Number|获取点击星星的index|starSelectIndex={this.starSelect}|

# Demo
```

import React, {Component} from 'react'
import {
View,
Dimensions,
Text,
Image,
ScrollView,
TextInput,
TouchableWithoutFeedback,
} from "react-native"
import SFSatrs from 'react-native-sf-stars'

export default class commonUser extends Component{

    componentDidMount(){

    }
    render(){
    return (
    
        //需要交互点击
        <SFSatrs starImage={require('../../res/start.png')}
                 starBgImage={require('../../res/startbg.png')}
                 starNumber={0}
                 starWidth={50}
                 starSpace={10}
                 starDisabled={false}
                 starSelectIndex={this.starSelect}
                 MaxStar={7}
<!--             style={{margin:10}}-->
                 />
         //不需要交互点击
         <SFSatrs starImage={require('../../res/start.png')}
                  starBgImage={require('../../res/startbg.png')}
                  starNumber={0}
                  starWidth={50}
                  starSpace={10}
                  MaxStar={7}
<!--              style={{margin:10}}-->
         />

            )
}
    starSelect=(index)=>{
    }
}

