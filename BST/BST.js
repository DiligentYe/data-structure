function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
	this.show = show;

	function show() {
		console.log(this.data);
	}
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.remove = remove;

	/**
	 * 插入元素
	 * @param  {number} data  插入的数据
	 */
	function insert(data) {
		var node = new Node(data);
		var current = this.root;
		var parent;

		/* 如果不存在根节点，该节点为根节点 */
		if (this.root == null) {
			this.root = node;
		} else {
			current = this.root;

			/* 如果小于当前节点，添加在右子树上，如果大于当前节点，添加在左子树上 */
			while (true) {
				parent = current; // 记录当前父节点
				if (data < current.data) {
					current = parent.left;
					if (current == null) {
						parent.left = node;
						break;
					}
				} else {
					current = parent.right;
					if (current == null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}

	/**
	 * 中序遍历
	 * @param  {Node} node 遍历的根节点
	 */
	function inOrder(node) {
		if (node) {
			inOrder(node.left);
			console.log(node.data);
			inOrder(node.right);
		}
	}

	/**
	 * 先序遍历
	 * @param  {Node} node 遍历的根节点
	 */
	function preOrder(node) {
		if (node) {
			console.log(node.data);
			preOrder(node.left);
			preOrder(node.right);
		}
	}

	/**
	 * 后序遍历
	 * @param  {Node} node 遍历的根节点
	 */
	function postOrder(node) {
		if (node) {
			postOrder(node.left);
			postOrder(node.right);
			console.log(node.data);
		}
	}

	/**
	 * 查找最小值
	 */
	function getMin() {
		var current = this.root;
		while (current.left) {
			current = current.left;
		}
		console.log(current.data);
	}

	/**
	 * 查找最大值
	 */
	function getMax() {
		var current = this.root;
		while (current.right) {
			current = current.right;
		}
		console.log(current.data);
	}

	/**
	 * 查找给定值
	 * @param  {number} data 给定的值
	 * @return {bool}      是否找到
	 */
	function find(data) {
		var current = this.root;

		while (current) {
			if (current.data == data) {
				return current;
			} else if (current.data > data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return null;
	}

	/**
	 * 删除某个元素
	 * @param  {number} data 要删除的元素
	 */
	function remove(data) {
		this.root = removeNode(this.root, data);
	}

	/**
	 * 真正处理删除节点
	 * @param  {object} node 要删除的子树根节点
	 * @param  {number} data 要删除节点
	 * @return {object}      返回处理后的子树
	 */
	function removeNode(node, data) {
		if (node == null) {
			return null;
		}

		if (node.data == data) {
			/* 没有子节点返回空 */
			if (!node.left && !node.right) {
				return null;
			}
			/* 没有左孩子返回右孩子 */
			if (!node.left) {
				return node.right;
			}
			/* 没有右孩子返回左孩子 */
			if (!node.right) {
				return node.left;
			}
			/* 左右孩子都有，删除节点由右子树的最小值代替 */
			var tempNode = getSmallest(node.right);
			node.data = tempNode.data;
			node.right = removeNode(node.right, tempNode.data);
			return node;
		}

		/* 如果未找到这个值，在子树上递归调用removeNode方法 */
		if (data < node.data) {
			node.left = removeNode(node.left, data);
			return node;
		} else {
			node.right = removeNode(node.right, data);
			return node;
		}
	}

	/**
	 * 用于获取右子树最小值
	 * @param  {object} node 要查找的子树根节点
	 * @return {object}      最小值节点
	 */
	function getSmallest(node) {
		var current = node;
		while (current.left) {
			current = current.left;
		}
		return current;
	}
}