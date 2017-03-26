function Queue() {
	this.dataStore = [];
	this.length = 0;

	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.peek = peek;
	this.empty = empty;
	this.clear = clear;
	this.toString = toString;

	/* 入队 */
	function enqueue(element) {
		this.dataStore.push(element);
		this.length++;
	}

	/* 出队 */
	function dequeue() {
		if (!this.empty()) {
			this.length--;
			return this.dataStore.shift();
		}
		return null;
	}

	/* 查看队头元素 */
	function peek() {
		return this.dataStore[0];
	}

	/* 查看是否为空 */
	function empty() {
		return this.length ? false : true;
	}

	/* 清空队列 */
	function clear() {
		this.dataStore = [];
		this.length = 0;
	}

	/* 显示队列所有元素 */
	function toString() {
		var str = '';
		this.dataStore.forEach(function(item) {
			str += item.toString() + '\n';
		})
		return str;
	}
}