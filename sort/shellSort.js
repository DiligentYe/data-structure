function shellSort(originArr) {
	/* 数组副本 */
	var cloneArr = originArr.concat();
	/* 用于交换数据 */
	var temp;
	/* 数组长度 */
	var len = cloneArr.length;
	/* 间隔数组 */
	var gap = [];

	/* 动态创建间隔数组 */
	for (var i = Math.floor(len / 2); i > 0;) {
		gap.push(i);
		i = Math.floor(i / 2);
	}

	/* 使用间隔数组中的每一个元素，选择数组中的元素，进行快速排序 */
	/* 方法1: 对每一个间隔的每一个分组进行快速排序 */
	/*for (var i = 0, gapLen = gap.length; i < gapLen; ++i) {
		// 分为gap[i]组分别进行排序 
		for (var j = 0; j < gap[i]; ++j) {
			// 第j组进行排序 
			for (var k = j + gap[i]; k < len; k = k + gap[i]) {
				temp = cloneArr[k];
				while (k - gap[i] >= 0 && cloneArr[k - gap[i]] > temp) {
					cloneArr[k] = cloneArr[k - gap[i]];
					k = k - gap[i];
				}
				cloneArr[k] = temp;
			}
		}
	}*/
	/* 方法2: 对于每一个间隔，从间隔位置开始，对其后每一个元素进行快速排序，保证前面的已经排好序 */
	for (var i = 0, gapLen = gap.length; i < gapLen; ++i) {
		for (var j = gap[i]; j < len; ++j) {
			temp = cloneArr[j];
			var k = j;
			while (k - gap[i] >= 0 && cloneArr[k - gap[i]] > temp) {
				cloneArr[k] = cloneArr[k - gap[i]];
				k -= gap[i];
			}
			cloneArr[k] = temp;
		}
	}

	return cloneArr;
}