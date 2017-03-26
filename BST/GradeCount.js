/**
 * 成绩对象
 */
function Grade(score) {
	this.score = score;
	this.count = 1;
	this.left = null;
	this.right = null;
}

/**
 * 成绩统计对象
 */
function GradeCount() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.getMax = getMax;
	this.getMin = getMin;

	/**
	 * 插入成绩，如果成绩已经存在，count＋1
	 * @param  {number} score 成绩
	 */
	function insert(score) {
		var current = this.root;
		var grade = new Grade(score);
		var parent;
		if (this.root == null) {
			this.root = grade;
		} else {
			while (true) {
				parent = current;
				if (current.score > score) {
					current = current.left;
					if (!current) {
						parent.left = grade;
						break;
					}
				} else if (current.score < score) {
					current = current.right;
					if (!current) {
						parent.right = grade;
						break;
					}
				} else {
					current.count++;
					break;
				}
			}
		}
	}

	/**
	 * 中序遍历树
	 * @param  {[type]} node [description]
	 * @return {[type]}      [description]
	 */
	function inOrder(node) {
		if (node) {
			inOrder(node.left);
			console.log(node.score + '----' + node.count);
			inOrder(node.right);
		}
	}

	/**
	 * 获取最高分
	 * @return {number} 最高分
	 */
	function getMax() {
		var current = this.root;
		while (current.right) {
			current = current.right;
		}
		return current.score;
	}

	/**
	 * 获取最低分
	 * @return {number} 最低分
	 */
	function getMin() {
		var current = this.root;
		while (current.left) {
			current = current.left;
		}
		return current.score;
	}
}