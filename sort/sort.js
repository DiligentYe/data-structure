function sort(sortMethod, originArr) {
	var start = new Date().getTime();

	var handleArr = sortMethod(originArr);

	var stop = new Date().getTime();

	return {
		handleArr: handleArr,
		time: stop - start
	};
}