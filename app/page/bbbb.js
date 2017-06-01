/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator
} from 'react-native';
/*导航器通过路由对象(route)来分辨不同的场景。每个路由对象都对应一个页面组件，开发者设置什么，导航器显示什么，所以route是导航器中重要的一个对象
 * 三步操作实现导航功能:
 * 1. 色沪指路由对象(告诉导航器我要显示那个页面)
 *    创建路由对象，对象的内容自定义，但是必须保航该场景需要显示的页面组件。
 * 2. 场景渲染配置（告诉导航器我要什么样的页面跳转效果）
 * 3. 渲染场景（告诉导航器如何渲染页面）
 *    利用第一步设置的路哟对象进行渲染场景*/

//定义第一个页面(FirstPage 一个button 点击进入下一级页面)
class FirstPage extends Component {
    //按钮onPress事件处理方法
    pressPush() {
        var nextRoute = {
            component: SecondPage
        };
        this.props.navigator.push(nextRoute);
        //推出下一级页面
    }

    render() {
        return (
            <View style={[styles.flex, {backgroundColor: 'yellow'}]}>
                <TouchableOpacity onPress={this.pressPush} style={styles.btn}>
                    <Text>点击推出下一级页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
//
//定义第二个页面(SecondPage 一个button,点击回到上一级页面)
class SecondPage extends Component {
    //按钮pressPop事件处理方法
    pressPop() {
        /* var nextRoute = {
         component: SecondPage
         };*/
        this.props.navigator.pop();
        //返回上一级页面
    }

    render() {
        return (
            <View style={[styles.flex, {backgroundColor: 'cyan'}]}>
                <TouchableOpacity onPress={this.pressPop} style={styles.btn}>
                    <Text>点击返回一级页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class rnTest extends Component {
    render() {
        var rootRoute = {
            component: FirstPage
        };
        return (
            <Navigator
                /*第一步
                 * initialRoute 指定默认页面,也就是启动app后会看到页面的对一屏
                 * 对象的属性是自定义的,该对象的内容会在renderScene方法中处理
                 * 备注:必须包含的属性:即component,表示需要渲染的页面组件*/
                initialRoute={rootRoute}
                /*第二步
                 * configureScene 场景渲染的配置/设置跳转效果*/
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                /*第三步
                 * renderScene 渲染场景
                 * 参数: route(第一步c创建并设置给导航器的路由对象,navigator(导航器对象)
                 * 实现:给需要显示的组件设置属性*/
                renderScene={(route, navigator) => {
                    //从route对象中获取页面组件
                    var Component = rootRoute.component;
                    return (
                        <Component
                            navigator={navigator}
                            route={route}/>
                    )
                }
                }
            />
        )
    }
}

var styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 30,
        borderColor: '#0089FF',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
AppRegistry.registerComponent('rnTest', () => rnTest);
