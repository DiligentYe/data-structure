function bubbleSort(originArr) {
	/* 数组副本 */
	var cloneArr = originArr.concat();
	/* 用于交换数据 */
	var temp;
	/* 数组长度 */
	var len = cloneArr.length;

	/* 每次选择出最大的元素 */
	/* 通过比较相邻元素，将较大的元素放在后面，将较大的数继续进行比较 */
	for (var i = 0; i < len - 1; ++i) {
		for (var j = 0; j < len - i; ++j) {
			// 如果当前元素大于下一个元素，互换两个元素 
			if (cloneArr[j] > cloneArr[j + 1]) {
				temp = cloneArr[j];
				cloneArr[j] = cloneArr[j + 1];
				cloneArr[j + 1] = temp;
			}
		}
	}

	return cloneArr;
}