function Node(element) {
	this.element = element;
	this.next = null;
}

function LinkedList() {
	this.head = new Node();
	this.find = find;
	this.insertAfter = insertAfter;
	this.append = append;
	// this.remove = remove;
	this.display = dispaly;

	/* 在尾部直接追加节点 */
	function append(node) {
		var currentNode = this.head;
		while (currentNode.next != null) {
			currentNode = currentNode.next;
		}
		currentNode.next = node;
	}

	/* 查找某个元素位置 */
	function find(element) {
		var currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
			if (currentNode.element == element) {
				return currentNode;
			}
		}
		return currentNode;
	}

	/* 在某个元素之后插入新元素 */
	function insertAfter(newNode, node) {
		var currentNode = this.find(node.element);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
	}

	/* 展示链表上元素 */
	function dispaly() {
		var currentNode = this.head;
		while (currentNode.next) {
			console.log(currentNode.next.element);
			currentNode = currentNode.next;
		}
	}
}