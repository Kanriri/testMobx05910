'use strict';
import {observable, action} from 'mobx'

class AppStore {
    @observable
    num = 0;

    @action
    resetNum() {
        this.num = 0
    }

    @action
    add() {
        this.num += 1
    }

    @action
    reduce() {
        this.num -= 1
    }

    @action
    setNum1(num) {
        this.num = num;
    }

    @action
    setNum2(data) {
        this.num = data.num;
    }
}

export default new AppStore();
