const optimalRoute = (input) => {
    input = input.split("\n").map(v => v.split(" ").map(Number));
    const [vertex, edge] = input.shift();
    const detailEdge = input;
    const graph = Array.from(Array(vertex), () => Array(vertex).fill(0));
    const check = Array(vertex).fill(0);
    check[0] = 1;
    let cnt =0;

    detailEdge.map(([vertex, edge]) => graph[vertex-1][edge-1] = 1);
    const dfs = (v) => {
        if(v === vertex-1) cnt++;
        else{
            Array.from({length: vertex},(temp, i) => {
                if(graph[v][i] === 1 && check[i] === 0){
                    check[i] = 1;
                    dfs(i);
                    check[i] = 0;
                }
            })
        }
    }
    dfs(0);
    console.log(cnt);
}

optimalRoute('5 9\n1 2\n1 3\n1 4\n2 1\n2 3\n2 5\n3 4\n4 2\n4 5')