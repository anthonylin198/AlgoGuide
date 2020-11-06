/*

You're given a list of arbitrary jobs that need to be completed; these jobs are represented by distinct integers. Also given a list of dependencies.

A dependency is represented as a pair of jobs where the first job is a prerequisite of the second one. In other words, the second job depends on the first one; it can only be completed
once the first job is completed

Write a function that takes in a list of jobs and list of dependencies and returns a list containing valid order which given jobs can be completed

jobs = [1,2,3,4]
deps = [[1,2,], [1,3], [3,2], [4,2], [4,3]]



*/

/*

If we use a graph, we will be able to solve this question in O(j + d) time and O(j + d) space

         1     prereqs  []      visited= false    visiting = false
         2     prereqs: [1]
         3     prereqs: [1]
         4     prereqs: []


Construct a graph of all jobs, and each jobnode will have the prereqs

*/

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }
  addPrereq(job, prereq) {
    const jobNode = this.getNode(job);
    const prereqNode = this.getNode(prereq);
    jobNode.prereqs.push(prereqNode);
  }
  addNode(job) {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }
  getNode(job) {
    if (!(job in this.graph)) this.addNode(job);
    return this.graph[job];
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.prereqs = [];
    this.visited = false;
    this.visiting = false;
  }
}

function topologicalSort(jobs, deps) {
  // first create the graph - add in new jobNodes, then add all the prereqs
  const jobGraph = new JobGraph(jobs, deps);
  for (const [prereq, job] of deps) {
    jobGraph.addPrereq(job, prereq);
  }
  // return the jobs in order
  return getOrderedJobs(jobGraph);
}

// function to get the ordered jobs
function getOrderedJobs(graph) {
  const orderedJobs = [];
  const { nodes } = graph;
  while (nodes.length) {
    const node = nodes.pop();
    const containsCycle = depthFirstTraverse(node, orderedJobs);
    if (containsCycle) return [];
  }
  return orderedJobs;
}

function depthFirstTraverse(node, orderedJobs) {
  if (node.visited) return false;
  if (node.visiting) return true;
  node.visiting = true;
  for (const prereqNode of node.prereqs) {
    const containsCycle = depthFirstTraverse(prereqNode, orderedJobs);
    if (containsCycle) return true;
  }
  node.visited = true;
  node.visiting = false;
  orderedJobs.push(node.job);
  return false;
}

console.log(
  topologicalSort(
    [1, 2, 3, 4],
    [
      [1, 2],
      [1, 3],
      [3, 2],
      [4, 2],
      [4, 3],
    ]
  )
);
