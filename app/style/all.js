import {
    StyleSheet
} from 'react-native';
import Dimen from './../constant/dimission.js';
export let all = StyleSheet.create({

    flex1: {
        flex: 1
    },

    fRow: {
        flexDirection: 'row',
    },

    bRed: {
        backgroundColor: 'red',
    },

    item: {
        flexDirection: 'column'
    },

    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },

    img: {
        width: 20,
        height: 20,
    },

    ml10: {
        marginLeft: 10,
    },

    ml20: {
        marginLeft: 20,
    },

    mR10: {
        marginRight: 10,
    },

    mR20: {
        marginRight: 20,
    },

    h50: {
        height: 50,
    },

    h80: {
        height: 80,
    },

    mt10: {
        marginTop: 10
    },

    mb10: {
        marginBottom: 10
    },

    mtb10: {
        marginBottom: 10,
        marginTop: 10
    },

    uac: {
        justifyContent: 'center'
    },

    ubc: {
        alignItems: 'center'
    },

    /*color*/
    grayBg: {
        backgroundColor: '#E6E6E6'
    },

    whiteBg: {
        backgroundColor: '#FFF'
    },

    /*隐藏*/
    uHide: {
        overflow: 'hidden'
    },
    //
    // ls1: {
    //     overflow: 'hidden',
    //     textOverflow: 'ellipsis',
    //     display: 'webkitBox',
    //     numberOfLines: 1,
    // },

    /*字体设置*/
    f15: {
        fontSize: 15
    }
    ,

    f10: {
        fontSize: 10
    }
    ,

    fBold: {
        fontWeight: 'bold'
    }
    ,

    title: {
        flex: 1,
        marginLeft: 15,
    }
    ,

    skipImg: {
        marginRight: 20
    }
    ,

//间隔线
    underline: {
        width: Dimen.window.width,
        height: 0.5,
        backgroundColor: '#E6E6E6'
    }
    ,

//bookSize
    bookSize: {
        height: 40,
        width: 30
    }
    ,

    size: {
        height: 100,
        width: 80
    }
})


