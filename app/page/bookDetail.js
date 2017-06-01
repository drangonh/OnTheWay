/**
 * Created by Administrator on 2017/5/29.
 */
/**
 * Created by Administrator on 2017/5/29.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
    Image
} from 'react-native';

import {all} from './../style/all';
import {Fetch} from './../constant/fetch';
import {bookDetailApi}from './../constant/api'
import BookDetailItem from './../component/bookDetailItem';

export default class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: {},
            load: false
        }
    }

    static navigationOptions = {
        title: '图书详情',
        headerRight: <Image style={[all.img]} source={require('./../images/shoucang2.png')}></Image>,
        headerStyle: [all.uac]
    };


    getData() {
        var that = this;
        const {params} = this.props.navigation.state;
        Fetch.fetchGet(bookDetailApi, params.isbn, function (data) {
            that.setState({
                obj: data,
                load: true
            });
        }, function (error) {
            alert(error);
        })
    }

    // 拉取网络数据
    componentDidMount() {
        this.getData();
    }

    render() {
        if (this.state.load) {
            return (
                <ScrollView style={[all.flex1, all.mt10, all.ml10, all.mR10, all.whiteBg]}>
                    <BookDetailItem title={this.state.obj.subtitle}
                                    author={this.state.obj.author}
                                    pub={this.state.obj.publisher}
                                    price={this.state.obj.price}
                                    page={this.state.obj.pages}
                                    image={this.state.obj.images}
                    />
                    <View style={[all.ml10, all.mt10, all.mR10]}>
                        <View>
                            <Text style={[all.fBold, all.f15]}>图书简介</Text>
                        </View>
                        <View>
                            <Text style={[all.f10]}>{this.state.obj.catalog}</Text>
                        </View>
                    </View>
                    <View style={[all.ml10, all.mt10, all.mR10]}>
                        <View>
                            <Text style={[all.fBold, all.f15,]}>作者简介</Text>
                        </View>
                        <View>
                            <Text style={[all.f10]}>{this.state.obj.author_intro}</Text>
                        </View>
                    </View>
                </ScrollView>
            )
        } else {
            return (
                <View style={[all.flex1, all.uac, all.ubc]}>
                    <Text>loading......</Text>
                </View>
            )
        }
    }
}
