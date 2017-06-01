/**
 * Created by Administrator on 2017/5/29.
 */
/**
 * Created by Administrator on 2017/5/29.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {all} from './../style/all';

export default class Motion extends Component {
    render() {
        return (
            <ScrollView style={all.flex}>
                <TouchableOpacity style={all.fRow}>
                    <Text>456</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
