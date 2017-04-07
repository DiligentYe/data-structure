function quickSort(originArr) {
	/* 如果数组为空，直接返回 */
	if (originArr.length === 0) {
		return [];
	}

	/* 基准值 */
	var pivot = originArr[0];
	/* 分别存放大于小于数组 */
	var lesser = [];
	var greater = [];

	/* 小于基准值，存放到lesser数组中，否则存放到greater数组中 */
	for (var i = 1; i < originArr.length; ++i) {
		if (originArr[i] < pivot) {
			lesser.push(originArr[i]);
		} else {
			greater.push(originArr[i]);
		}
	}

	/* 将数组拼接后返回 */
	return quickSort(lesser).concat(pivot, quickSort(greater));
}