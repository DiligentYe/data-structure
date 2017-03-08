function List() {
    // 私有变量
    // 列表长度
    this.length = 0;
    // 当前位置
    this.pos = 0;
    // 存放列表内容
    this.dataStore = [];
}

// 共有方法
List.prototype = {
    // 获取当前元素
    getElement: function() {
        return this.dataStore[this.pos];
    },

    // 当前位置之后是否有元素
    hasNext: function() {
        return this.pos < this.length - 1;
    },

    // 当前位置之前是否有元素
    hasPrev: function() {
        return this.pos > 0;
    },

    // 设置指针位置
    moveTo: function(pos) {
        this.pos = pos;
    },

    // 返回指针当前位置 
    currPos: function() {
        return this.pos;
    },

    // 指针指向后一个位置
    next: function() {
        if (this.pos < this.length - 1) {
            this.pos++;
        }
    },

    // 指针指向前一个位置
    prev: function() {
        if (this.pos > 0) {
            this.pos--;
        }
    },

    // 当前位置为列表尾
    end: function() {
        this.pos = this.length - 1;
    },

    // 当前位置为列表头
    front: function() {
        this.pos = 0;
    },

    // 判断元素是否在列表中
    contains: function(item) {
        var findAt = this.find(item);
        if (findAt != -1) {
            return true;
        } else {
            return false;
        }
    },

    // 清空列表
    clear: function() {
        delete this.dataStore;
        this.dataStore = [];
        this.length = 0;
        this.pos = 0;
    },

    // 元素插入到某个元素之后
    insert: function(item, after) {
        var insertPos = this.find(after);
        if (insertPos != -1) {
            this.dataStore.splice(insertPos + 1, 0, item);
            this.length++;
            return true;
        } else {
            return false;
        }
    },

    // 显示列表中元素
    toString: function() {
        return this.dataStore;
    },

    // 删除元素
    remove: function(item) {
        // 元素所在位置，－1表示为找到
        var pos = this.find(item);
        if (pos == -1) {
            return false;
        } else {
            this.dataStore.splice(pos, 1);
            this.length--;
            return true;
        }
    },

    // 查找元素位置
    find: function(item) {
        return this.dataStore.indexOf(item);
    },


    // 在尾部追加元素
    append: function(item) {
        // 第一种方法
        // this.dataStore.push(item);
        // this.length++;
        // 第二种方法
        this.dataStore[this.length++] = item;
    }

}
