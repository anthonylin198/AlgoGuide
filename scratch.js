function createRequestQueue(id) {
  /**
   * Your mission:
   * Create and return a request queue with the following methods.
   * Carefully read the description of each method in the task description.
   * 
   * enqueue(id: number, request: () => Promise<string>): Promise<string>;
   * 
   * cancel(id: number): void;
   * 
   * processNext(): Promise<boolean>;
   * 
   * size(): number;
   */
  const cache = {};
  const queue = [];
  return {
      enqueue: async (id, callback) => {
          try {
              queue.push(id);
              cache[id] = callback;
              return callback();
          } catch (e) {
              console.error(e);
          }  
        },
      cancel: (id) => {
          // delete from cache and delete from the queue array
          if (cache[id]) {
              const temp = cache[id];
              delete cache[id];
              return temp;
          }
          for (let i = 0; i < queue.length; i++) {
              queue.splice(i,1)
          }
        },
      processNext: async () => {
          // shift off the queue, and process the value in the cache
          const current = queue.shift();
          try {
              cache[current]
          } catch (e) {
              console.error(e);
          }
          },
      size: () => {
          return queue.length;
        } 
  }
}



/*

Interface accepts async 

/*


/*

We get asyncronous request


*/

/*

https://krasimirtsonev.com/blog/article/implementing-an-async-queue-in-23-lines-of-code

function createQueue(tasks, maxNumOfWorkers = 4) {
  var numOfWorkers = 0;
  var taskIndex = 0;

  return new Promise(done => {
    const handleResult = index => result => {
      tasks[index] = result;
      numOfWorkers--;
      getNextTask();
    };
    const getNextTask = () => {
      if (numOfWorkers < maxNumOfWorkers && taskIndex < tasks.length) {
        tasks[taskIndex]().then(handleResult(taskIndex)).catch(handleResult(taskIndex));
        taskIndex++;
        numOfWorkers++;
        getNextTask();
      } else if (numOfWorkers === 0 && taskIndex === tasks.length) {
        done(tasks);
      }
    };
    getNextTask();
  });
}

*/
function RequestQueue () {
  /**
   * Add a request with the given ID to the end of the queue.
   * 
   * A request is a function that returns a promise resolving to a string.
   * 
   * Enqueue should return a promise that resolves when the
   * enqueued function is processed, with the resolved value of the request.
   * 
   * However, the promise returned by "enqueue" should be rejected
   * if the request is canceled before being processed.
   */
  enqueue(id: number, request: () => Promise<string>): Promise<string>;

  /**
   * Cancel the request with the given ID.
   * If no request with that ID is found, do nothing.
   */
  cancel(id: number): void;

  /**
   * Process the next request in the queue, in FIFO order.
   * Should not throw an error or be rejected even if the request does.
   * Resolves to true if the queued request resolved;
   * resolves to false if the queued request
   * rejected or threw an error.
   */
  processNext(): Promise<boolean>;

  /**
   * Return the current size of the queue.
   */
  size(): number;
}



*/