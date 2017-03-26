var queues = []

for (var i = 0; i < 10; ++i) {
	queues[i] = new Queue();
}

function radixSorting(numArr) {
	/* 第一次排序, 按照各位排序 */
	for (var i = 0; i < numArr.length; ++i) {
		var index = numArr[i] % 10;
		queues[index].enqueue(numArr[i]);
	}
	/* 将修改更新到数组中 */
	numArr = [];
	for (var i = 0; i < 10; i++) {
		while (queues[i].length) {
			numArr.push(queues[i].dequeue());
		}
		queues[i].clear();
	}

	/* 第二次排序，按照十位排序 */
	for (var i = 0; i < numArr.length; ++i) {
		var index = (numArr[i] - numArr[i] % 10) / 10;
		console.log(index);
		queues[index].enqueue(numArr[i]);
	}

	/* 将修改更新到数组中 */
	numArr = [];
	for (var i = 0; i < 10; i++) {
		while (queues[i].length) {
			numArr.push(queues[i].dequeue());
		}
		queues[i].clear();
	}
	console.log(numArr.toString());
}