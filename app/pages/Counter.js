'use strict';
import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';
import ButtonHighlight from '../widget/ButtonHighlight';
// mobx
import {inject, observer} from 'mobx-react';
// style
import CounterStyle from './style/CounterStyle';

@inject('RootStore')
@observer
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.store = props.RootStore
    }

    render() {
        return (
            <View style={CounterStyle.container}>
                <Text style={CounterStyle.counterTxt}>{this.store.num}</Text>
                <View>
                    <ButtonHighlight
                        title={'+1'}
                        onPress={(enable) => {
                            // 触发 加的动作
                            this.store.add();
                            enable();
                        }}
                    />
                    <ButtonHighlight
                        title={'-1'}
                        onPress={(enable) => {
                            // 触发 减的动作
                            this.store.reduce();
                            enable();
                        }}
                    />
                    <ButtonHighlight
                        title={'set 999'}
                        onPress={(enable) => {
                            this.store.setNum1(999);
                            enable();
                        }}
                    />
                    <ButtonHighlight
                        title={'set 555'}
                        onPress={(enable) => {
                            this.store.setNum2({num: 555});
                            enable();
                        }}
                    />
                    <ButtonHighlight
                        title={'reset'}
                        onPress={(enable) => {
                            this.store.resetNum();
                            enable();
                        }}
                    />
                </View>
            </View>
        );
    }
}
