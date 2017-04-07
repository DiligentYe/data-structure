function mergeSort(originArr) {
	/* 数组副本 */
	var cloneArr = originArr.concat();

	/* 调用归并排序 */
	doMergeSort(cloneArr, 0, cloneArr.length - 1);

	return cloneArr;
}

/* 向下分解数组，递归调用 */
function doMergeSort(arr, low, high) {
	if (low < high) {
		var mid = low + Math.floor((high - low) / 2);
		doMergeSort(arr, low, mid);
		doMergeSort(arr, mid + 1, high);
		merge(arr, low, mid, high);
	}
}

/* 数组融合 */
function merge(arr, low, mid, high) {
	var p_low = low;
	var p_high = mid + 1;

	var sortArr = [];
	/* 比较左右部分元素，将较小的元素存放在sortArr前面 */
	while (p_low <= mid && p_high <= high) {
		if (arr[p_low] > arr[p_high]) {
			sortArr.push(arr[p_high++]);
		} else {
			sortArr.push(arr[p_low++]);
		}
	}

	/* 将两部分可能剩余的元素复制到数组中 */
	while (p_high <= high) {
		sortArr.push(arr[p_high++]);
	}

	while (p_low <= mid) {
		sortArr.push(arr[p_low++]);
	}
	/* 将已排序的数组复制到原数组对应位置 */
	for (var i = low; i < high + 1; i++) {
		arr[i] = sortArr[i - low];
	}
}