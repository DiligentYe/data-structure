function insertSort(originArr) {
	/* 数组副本 */
	var cloneArr = originArr.concat();
	/* 用于交换数据 */
	var temp;
	/* 数组长度 */
	var len = cloneArr.length;

	/* 循环数组中的每一个元素 */
	for (var i = 1; i < len; ++i) {
		// 记录要插入的值 
		temp = cloneArr[i];
		// 找到合适的位置插入 
		for (var j = i - 1; j >= 0; --j) {
			if (temp < cloneArr[j]) {
				// 右移已排序数组 
				cloneArr[j + 1] = cloneArr[j];
			} else {
				break;
			}
		}
		cloneArr[j + 1] = temp;
	}

	return cloneArr;
}