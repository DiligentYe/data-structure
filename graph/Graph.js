function Vertex(label, wasVisited) {
	this.label = label;
	this.wasVisited = wasVisited;
}

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
	}

	this.marked = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.marked[i] = false;
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.bfs = bfs;

	/**
	 * 添加边
	 * @param {number} v 顶点
	 * @param {number} w 顶点
	 */
	function addEdge(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	}

	/**
	 * 显示图的邻接表
	 */
	function showGraph() {
		for (var i = 0; i < this.vertices; ++i) {
			var str = i + ' -> ';
			for (var j = 0; j < this.adj[i].length; ++j) {
				str += this.adj[i][j] + ' ';
			}
			console.log(str);
		}
	}

	/**
	 * 深度优先搜索
	 * @param  {number} v  顶点
	 */
	function dfs(v) {
		console.log(this.marked);
		this.marked[v] = true;
		console.log(v + ' -> ');
		for (var i = 0; i < this.adj[v].length; ++i) {
			if (!this.marked[this.adj[v][i]]) {
				this.dfs(this.adj[v][i]);
			}
		}
	}

	/**
	 * 广度优先搜索
	 * @param  {number} v  顶点
	 */
	function bfs(v) {
		var queue = [];
		this.marked[v] = true;
		queue.push(v);
		while (queue.length) {
			var v = queue.shift();
			console.log(v + ' -> ');
			for (var i = 0; i < this.adj[v].length; ++i) {
				if (!this.marked[this.adj[v][i]]) {
					queue.push(this.adj[v][i]);
					this.marked[this.adj[v][i]] = true;
				}
			}
		}
	}
}