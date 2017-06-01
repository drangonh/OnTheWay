/**
 * Created by Administrator on 2017/5/30.
 */
import React, {Component} from 'react';

export let Fetch = {
    fetchGet: (url, params, sucessCallBack, errorCallBack) => {
        url += params;

        fetch(url)
            .then((response) => response.json())
            .then((responseObj) => sucessCallBack(responseObj))
            .catch((error) => errorCallBack(error))
    },

    /**
     * Get請求，沒有參數傳null
     */
    fetchURIGet: (url, params, successCallback, failCallback) => {

        // 1.拼接參數
        url += "?key=46439e22fab73b5274b6e3c8db0f11fe";
        if (params) {
            var paramsBody = Object.keys(params)
                .reduce((a, k) => {
                    a.push(k + "=" + encodeURIComponent(params[k]));
                    return a;
                }, [])
                .join('&');
            url += "&" + paramsBody;
        }
        console.info(url);
        fetch(url)
            .then((response) => response.json())
            .then((responseObj) => {
                successCallback(responseObj)
            })
            .catch((error) => failCallback(error));
    },

    /**
     * POST請求
     */
    fetchURIPost: (url, params, successCallback, failCallback) => {

        // 1.拼接參數
        var paramsBody = Object.keys(params)
            .reduce((a, k) => {
                a.push(k + "=" + encodeURIComponent(obj[k]));
                return a;
            }, [])
            .join('&');
        // 2.發送請求
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            body: paramsBody + "&key=46439e22fab73b5274b6e3c8db0f11fe"

        })
            .then((response) => response.json())
            .then((responseObj) => successCallback(responseObj))
            .catch((error) => failCallback(error));
    }
}

