[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12540704&assignment_repo_type=AssignmentRepo)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

## Answer 

The outer loops runs for each vertex, and there are $n$ number of vertices in the graph. Inside the outer loop, there is an inner loop that also runs for each vertex, and there is also $n$ vertices. Within the inner loop there is a check, $adjMatrix[i][j]$ is equal to $1$: this is a constant time operation. If $adjMatrix[i][j]$ is equal to $1$, then the vertex $j$ is pushed to the adjacency list: this is also a constant time operation. Therefore, for each pair of vertices $(i,j)$, there is a constant amount of work. Since there is $x$ vertices that iterate over all possible pairs of vertices, the total work done is, $n * m$ or $n^2$. This gives a runtime of $O(n^2)$, where x is the number of vertices in the graph.This would mean you iterate over all possible pairs of vertices in the adjacency matrix. 
