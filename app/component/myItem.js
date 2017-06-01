/**
 * Tab
 * Songlcy create by 2017-01-16
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {all}from './../style/all';

export default class TabBar extends Component {
    constructor(props) {
        super(props)
    };

    static propTypes = {
        image: React.PropTypes.string,
        title: React.PropTypes.string
    };

    componentDidMount() {

    };

    render() {
        return (
            <TouchableOpacity style={[all.h50,all.uac,all.mb10,all.whiteBg]}>
                <View style={[all.ubc, all.fRow]}>
                    <View style={[all.img, all.ml10]}>
                        <Image style={all.img} source={this.props.images}/>
                    </View>
                    <View style={{marginLeft: 10, flex: 1}}>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View style={[all.img, all.mR10]}>
                        <Image style={[all.img, {resizeMode: 'contain'}]} source={require('./../images/jiantou.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

