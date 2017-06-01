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

import {tabBarStyle} from './../style/tabBarStyle';
import {commonStyle} from './../style/commonStyle';

export default class TabBar extends Component {

    // 1.声明所需要的属性
    static propTypes = {
        /**
         * 框架内帮我们回调
         */
        goToPage: React.PropTypes.func,// 跳转到对应tab,这里的这些属性的名字是固定的
        activeTab: React.PropTypes.number,// 当前被选中的Tab下标
        tabs: React.PropTypes.array, // 所有Tab的集合

        /**
         * 需要自己调用
         */
        tabNames: React.PropTypes.array,// 所有Tab的名称
        images: React.PropTypes.array, // 所有Tab的图标
        imagesAx: React.PropTypes.array,
    };

    /**
     * tab切换的时候有动画效果
     */
    setAnimationValue({value}) {

    }

    componentDidMount() {

        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    /**
     * 生成Tab
     * i标识哪个Tab
     */
    renderTab(tab, i) {
        let color = this.props.activeTab === i ? "#FE2D4A" : "#8E8E8E";
        let image = this.props.activeTab === i ? this.props.imagesAx[i].image : this.props.images[i].image;
        return (

            <TouchableOpacity key={i} activeOpacity={0.6} onPress={() => this.props.goToPage(i)}
                              style={tabBarStyle.tab}>
                <View style={tabBarStyle.item}>
                    <View style={{height: 30, width: 30,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height: 25, width: 25}}
                               source={image}/>
                    </View>
                    <Text style={{color: color, fontSize: 12}}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {

        return (
            <View style={tabBarStyle.container}>
                <View style={commonStyle.underline}/>
                <View style={tabBarStyle.tabs}>
                    {this.props.tabs.map((tab, i) => this.renderTab(tab, i))}
                </View>
            </View>
        )
    }
}

