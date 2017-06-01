/**
 * Created by Administrator on 2017/5/31.
 */
import React, {Component}from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import {all} from './../style/all'

export default class bookDetailItem extends Component {
    static propTypes = {
        image: React.PropTypes.object,
        title: React.PropTypes.string,
        pub: React.PropTypes.string,
        author: React.PropTypes.array,
        price: React.PropTypes.string,
        page: React.PropTypes.string
    };

    render() {
        return (
            <View style={[all.h80, all.fRow, all.ubc]}>
                <View style={[all.size]}><Image source={{uri: this.props.image.small}} style={all.size}/></View>
                <View style={[all.flex1, all.ml10]}>
                    <View style={[{height:20},all.uac,all.mt10]}>
                        <Text style={[all.f15, all.fBold,all.uHide,{height:17,overflow:'hidden'}]}>{this.props.title}</Text>
                    </View>
                    <Text style={[all.f10, all.mtb10]}>{this.props.pub}</Text>
                    <Text style={[all.mb10, all.f10]}>{this.props.author}</Text>
                    <View style={[all.fRow, all.ubc]}>
                        <Text style={[all.f15, {color: 'green'}]}>{this.props.price}</Text>
                        <Text style={[all.f10, all.ml10]}>{this.props.page}</Text>
                    </View>
                </View>
            </View>
        )
    }
}