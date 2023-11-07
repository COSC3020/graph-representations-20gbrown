function convertToAdjList(adjMatrix) {
    const numVertices = adjMatrix.length;
    const adjList = [];

    for (let i = 0; i < numVertices; i++) {
        adjList[i] = [];
        for (let j = 0; j < numVertices; j++) {
            if (adjMatrix[i][j] === 1) {
                adjList[i].push(j);
            }

        }
    }
    return adjList;
}

  