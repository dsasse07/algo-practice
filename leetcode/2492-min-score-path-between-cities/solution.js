/**
2492. Minimum Score of a Path Between Two Cities

You are given a positive integer n representing n cities numbered from 1 to n. You are also given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a bidirectional road between cities ai and bi with a distance equal to distancei. The cities graph is not necessarily connected.

The score of a path between two cities is defined as the minimum distance of a road in this path.

Return the minimum possible score of a path between cities 1 and n.

Note:
- A path is a sequence of roads between two cities.
- It is allowed for a path to contain the same road multiple times, and you can visit cities 1 and n multiple times along the path.
- The test cases are generated such that there is at least one path between 1 and n.


Ex 1:
                1
            7 /   \ 9
             4 --- 2
                5   \ 6
                     3
        
Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.

Ex 2:
                1
            4 /   \ 2
             3     2
          7 / 
           4

Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.


Union Find Approach:
- Since not all nodes are guaranteed to connect, we need to account for disjointed sets.
- If we solved using disjoint set / Union Find, we can iterate over the connections (roads) to determine
  which nodes are in the same set.
    - Since min score result is just the smallest edge value in the whole graph, we can make the root of the Union set
      the node with the smallest edge value
  
  1. Initialize Disjoint Set -> Each node points to itself as its own root.
  2. Iterate Over Edges -> For each edge, set the root of node with the HIGHER SCORE to be the root of the node with the LOWER SCORE
      -> While finding the root for each vertex, we can "compress the path" so we end up with a flat tree, where all children have the same parent
  3. Return the stored rank (minScore) of the root of the set that node 1 belongs to

 */
const minScoreUnionFind = (n, roads) => {
  const parents = new Map();
  const ranks = new Map();
  const edges = new Map();

  // Initialize Disjoint Set
  for (let i = 1; i <= n; i++) {
    parents.set(i, i);
    ranks.set(i, Infinity)
  }

  // Create map for fast lookup of scores
  for (let [a, b, d] of roads) {
    edges.set(`${a}-${b}`, d);
  }

  // given a node, walk up the tree to the root, while compressing the path to create a flat tree
  const findParent = (v) => {
    let current = v;

    while (current !== parents.get(current)) {
      const parent = parents.get(current)
      const grandparent = parents.get(parent)
      parents.set(current, grandparent)
      current = grandparent // if parent is root, grandparent is the same as parent
    }

    return current
  }

  // given two nodes, join them into the same set by getting their roots, and setting the root of 
  // the higher rank root to the root of the lower rank root
  const union = (c1, c2) => {
    let [rootC1, rootC2] = [findParent(c1), findParent(c2)]
    let rankC1 = ranks.get(rootC1);
    let rankC2 = ranks.get(rootC2);
    let edgeScore = edges.get(`${c1}-${c2}`) ?? edges.get(`${c1}-${c2}`)

    if (rootC1 !== rootC2) {
      if (rankC1 <= rankC2) {
        parents.set(rootC2, rootC1)
        ranks.set(rootC1, Math.min(rankC1, edgeScore))
      } else {
        parents.set(rootC1, rootC2)
        ranks.set(rootC2, Math.min(rankC2, edgeScore))
      }

    } else {
      ranks.set(rootC1, Math.min(rankC1, edgeScore))
    }
  }

  // Use the edges to join the disjoint sets
  for (let [a, b, _] of roads) {
    union(a, b)
  }

  // get the root of the node that node 1 is in, and return its score
  return ranks.get(findParent(1))
}


/* DFS approach
  It is guaranteed in the problem that there is a path from 1 -> n. 
  
  So even though it states that not all nodes are connected, we know that the ones we care about are.
  We also know that the path that is taken does not matter:
  - we can reuse roads as many times as we want
  - we only care about minScore, not total

  We can create a graph from roads with confidence that all of the vertices and edges in the cluster with 1 
  will be present.

  Then, just DFS over that graph starting at 1, and keeping track of the minScore. 
  Be sure to track visited node to prevent infinite loop
*/
const minScoreDfs = (n, roads) => {
  const graph = new Map()
  for (let [a,b,d] of roads) {
    if (graph.has(a)) {
      graph.get(a).set(b, d)
    } else {
      graph.set(a, new Map())
      graph.get(a).set(b, d)
    }

    if (graph.has(b)) {
      graph.get(b).set(a, d)
    } else {
      graph.set(b, new Map())
      graph.get(b).set(a, d)
    }
  }

  // guaranteed path from 1 -> n, so those nodes must be included above already. 
  // If there are vertices missing, we dont care

  let minScore = Infinity;
  const dfs = ([vertex, edges], visited = new Set()) => {
    visited.add(vertex);
    for (const [childVertex, weight] of edges) {
      minScore = Math.min(minScore, weight)
      if (!visited.contains(childVertex)) {
        dfs([childVertex, graph.get(childVertex)], visited)
      }
    }
  }

  dfs([1, graph.get(1)])
  return minScore;
}