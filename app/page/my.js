/**
 * Created by Administrator on 2017/5/29.
 */
/**
 * Created by Administrator on 2017/5/29.
 */
import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import MyItem from './../component/myItem';
import {all} from './../style/all';

var arr = [{image: require('./../images/shoucang2.png'), title: "收藏"}];

export default class My extends Component {


    render() {
        return (
            <View style={[all.flex1,{backgroundColor:'#CCC'}]}>
                <MyItem title={arr[0].title} images={arr[0].image}/>
            </View>
        )
    }
}



