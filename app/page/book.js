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
    ListView,
    TextInput,
    Image,
    TouchableHighlight
} from 'react-native';

import {all} from './../style/all';
import {Fetch} from './../constant/fetch';
import {bookSearchApi}from './../constant/api'
import {StackNavigator}from 'react-navigation'
import BookDetail from './bookDetail'

class Book extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => (oldRow !== newRow)
        });
        this.state = {
            keywords: 'React',
            load: false,
            dataSource: ds.cloneWithRows([{title: "row1", pubdate: "2017-5-29"}, {
                title: "row1",
                pubdate: "2017-5-29"
            }, {title: "row1", pubdate: "2017-5-29"}, {title: "row1", pubdate: "2017-5-29"}, {
                title: "row1",
                pubdate: "2017-5-29"
            }, {title: "row1", pubdate: "2017-5-29"}, {title: "row1", pubdate: "2017-5-29"}, {
                title: "row1",
                pubdate: "2017-5-29"
            }, {title: "row1", pubdate: "2017-5-29"}, {title: "row1", pubdate: "2017-5-29"},])
        }
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    getData() {
        var that = this;
        Fetch.fetchGet(bookSearchApi, "?count=20&q=" + this.state.keywords, function (data) {
            that.setState({
                dataSource: that.state.dataSource.cloneWithRows(data.books),
                load: true
            })
        }, function (error) {
            alert(error);
        })
    }

    // 拉取网络数据
    componentDidMount() {
        this.getData();
    }

    render() {
        const {navigate} = this.props.navigation;
        // var color = rgb(255, 255, 0);
        if (this.state.load) {
            return (
                <View style={all.flex1}>
                    {/*<View style={all.h50}>*/}
                    {/*<TextInput placeholder={123}/>*/}
                    {/*</View>*/}
                    <ListView style={all.flex1} dataSource={this.state.dataSource}
                              renderRow={rowData =>
                                  <TouchableHighlight underlayColor='red'
                                                      style={{
                                                          backgroundColor: '#ccc',
                                                          padding: 10,
                                                          marginTop: 10,
                                                          marginLeft: 10,
                                                          marginRight: 10
                                                      }}
                                      //在navigate可以传入多个参数,第一个为跳转的页面名字.然后还可以想跳转的页面传入需要的参数,如这里的isbn13
                                      //在跳转的页面通过const {params} = this.props.navigation.state;就可以取到包含这些参数的对象
                                                      onPress={() => {
                                                          navigate('BookDetail', {isbn: rowData.isbn13})
                                                      }}
                                  >
                                      <View style={all.item}>
                                          <View style={all.container}>
                                              <Image
                                                  source={this.state.load ? {uri: rowData.image} : require('./../images/footer4-ax.png')}
                                                  style={[all.bookSize]}/>
                                              <View>
                                                  <Text style={all.title}>{rowData.title}</Text>
                                                  <Text style={all.title}>{rowData.pubdate}</Text>
                                              </View>
                                          </View>
                                      </View>
                                  </TouchableHighlight>}>
                    </ListView>
                </View>
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

const SimpleApp = StackNavigator({
    Book: {screen: Book},
    BookDetail: {screen: BookDetail},
})

export default SimpleApp;