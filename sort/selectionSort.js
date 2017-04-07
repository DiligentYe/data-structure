function selectionSort(originArr) {
	/* 数组副本 */
	var cloneArr = originArr.concat();
	/* 用于交换数据 */
	var temp;
	/* 存放最小元素索引 */
	var minIndex = 0;
	/* 数组长度 */
	var len = cloneArr.length;

	/* 从第一个位置开始，比较当前位置和后面所有元素，获取最小元素后面的位置 */
	for (var i = 0; i < len - 1; ++i) {
		minIndex = i;
		// 获取最小元素位置 
		for (var j = i + 1; j < len; ++j) {
			if (cloneArr[minIndex] > cloneArr[j]) {
				minIndex = j;
			}
		}
		// 如果最小元素所在索引，不是当前位置，交换元素 
		if (minIndex !== i) {
			temp = cloneArr[i];
			cloneArr[i] = cloneArr[minIndex];
			cloneArr[minIndex] = temp;
		}
	}

	return cloneArr;
}