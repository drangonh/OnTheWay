/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';  //图标插件
import ScrollableView from 'react-native-scrollable-tab-view';
import TabBar from './component/TabBar';
import Book from './page/book';
import Motion from './page/motion';
import My from './page/my';

var tabNames = ["图书", "运动", "我的"];
var images = [{image: require('./images/footer1.png')}, {image: require('./images/footer3.png')}, {image: require('./images/footer4.png')}];
var imagesAx = [{image: require('./images/footer1-ax.png')}, {image: require('./images/footer3-ax.png')}, {image: require('./images/footer4-ax.png')}];
export default class Index extends Component {
    render() {
        return (
            <ScrollableView
                renderTabBar={() => <TabBar tabNames={tabNames} images={images} imagesAx={imagesAx}/>}
                initialpage={0}
                tabBarPosition="overlayBottom">
                <Book/>
                <Motion/>
                <My/>
            </ScrollableView>
        );
    }
}