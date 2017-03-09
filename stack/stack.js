function Stack() {
    // 私有属性
    this.dataStore = [];
    this.top = 0;
    this.length = 0;
}

Stack.prototype = {
    // 入栈
    push: function(item) {
        this.dataStore[this.length++, this.top++] = item;
    },

    // 出栈
    pop: function() {
        return this.dataStore[--this.length, --this.top];
    },

    // 查看栈顶元素
    peek: function() {
        return this.dataStore[this.length - 1];
    },

    // 清空栈
    clear: function() {
        this.top = 0;
        this.length = 0;
    }
}
