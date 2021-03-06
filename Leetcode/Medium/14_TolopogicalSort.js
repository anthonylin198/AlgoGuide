/*
! Algo Expert

You're given a list of arbitrary jobs that need to be completed; these jobs are represented by distinct integers. Also given a list of dependencies.

A dependency is represented as a pair of jobs where the first job is a prerequisite of the second one. In other words, the second job depends on the first one; it can only be completed
once the first job is completed

Write a function that takes in a list of jobs and list of dependencies and returns a list containing valid order which given jobs can be completed

jobs = [1,2,3,4]
deps = [[1,2,], [1,3], [3,2], [4,2], [4,3]]



1


*/

/*

Topological Sort: Toplogical sorting for a DIRECTED ACYCLIC GRAPH is a linear ordering of vertices such that for every directed edge u v, vertex u
comes before v in the ordering. Toplogical sorting for a graph is not possible if the graph is not a DAF (there would be a cycle)

*/

/*

jobs = [1,2,3,4]
deps = [[1,2,], [1,3], [3,2], [4,2], [4,3]]


todo: Brute force solution
keep track of done jobs: [1, 4, 3, 4]
1) Iterate through jobs, "do" the jobs that do not need any prerequesites - if itere throuhg the second value in each deps, and see that not required, know we can just do hte job


2) Iterate throuhg again, for values that are not done, comparing the first value, with the done jobs array. If makes all the way through without returning false, then push


SOLVE WITH TOPOLOGICAL SORT


*/

// todo: Topological
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
  orderedJobs.push(node.job); // if reaches this point, mean that all prereqs are hit
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
