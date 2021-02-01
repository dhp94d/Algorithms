# 다익스트라(Dijkstra) 알고리즘

목표: 다익스트라 알고리즘에 대해 이해하고, 기본문제를 풀어보자



tip. 그래프에서 정점끼리의 최단 경로를 구하는 문제들

1. 하나의 정점에서 다른 하나의 정점까지 최단 경로를 구하는 문제
2. 하나의 정점에서 다른 모든 정점까지의 최단 경로를 구하는 문제
3. 하나의 목적지로 가는 모든 최단 경로를 구하는 문제
4. 마지막으로 모든 최단 경로를 구하는 문제

여기서 다익스트라는 두번째 바법!

## 소개

- 다익스트라 알고리즘은 **다이나믹 프로그래밍**을 활용한 대표적인 **최단 경로 탐색 알고리즘** 입니다. (인공위성, GPS 소프트웨어 등에서 많이 사용)
- 특정한 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 알려줍니다. (음의 간선은 포함할 수 없음, 허나 현실에서는 음의 간선이 존재하지 않기 때문에 현실 세계에서 사용하기 매우 접합)

- DP를 사용하는 이유는 최단거리는 여러 개의 최단 거리로 이루어져 있기 떄문에 작은 문제가 큰 문제의 부분 집합에 속해 있다고 볼 수있음. 기본적으로 다익스트라는 하나의 최단 거리를 구할 때 그 이전까지 구했던 최단 거리 정보를 그대로 사용한다는 특징이 존재



## 기본로직 

![image](https://user-images.githubusercontent.com/68668924/106092316-5f1f0800-6171-11eb-9795-7d01e7b28e69.png)

시작점이 5번이라 가정, 5번 노드를 제외한 나머지 정점들이 가지는 최단 경로는 아직 연결되지 않았으므로 무한대

| 5    | 4    | 3    | 2    | 1    |
| ---- | ---- | ---- | ---- | ---- |
| 0    | INF  | INF  | INF  | INF  |



이 후 가장 짧은 정점을 고릅니다. 현재 5번이 시작점이므로 5번과 연결된 노드는 **2**, **4**번 노드 입니다.

**2번 노드** 

2번 노드의 최단 거리를 가지고 있는 현재 최단거리(INF)와, 5번 노드의 최단거리(0) + 2번 - 5번의 가중치(4) 값 중 가장 작은 값으로 갱신합니다

- dist[2] = min(dist[2], dist[5] + adj\[5][2])  => min(INF, 4)

2번노드는 4가 됩니다. 4번노드 또한 동일한 과정

| 5    | 4    | 3    | 2    | 1    |
| ---- | ---- | ---- | ---- | ---- |
| 0    | INF  | INF  | INF  | INF  |
|      | 2    |      | 4    |      |

이제 나머지 정점 중에서 경로가 가장 짧은 정점을 고릅니다. 여기서는 4번 노드(2) 가되며 **5 -> 2** 의 순서로 이동 됩니다.

다시 위의 과정을 거쳐 **4번 노드** 에 인접한 2, 3 번 노드를 계산 해 줍니다.

**2번 노드**

2번 정점의 최단거리(4)와 4번 정점의 최단거리(2) + 2번과 4번의 가중치(1)

- dist[2] = min(dist[2], dist[4] + adj\[4][2]) => min(4, 3)

2번 노드는 3이 됩니다. 3번노드 또한 같은 방식으로 계산 합니다.

| 5    | 4    | 3    | 2    | 1    |
| ---- | ---- | ---- | ---- | ---- |
| 0    | 2    | 3    | 3    | 6    |



이 후 과정 반복



참조:https://hsp1116.tistory.com/45?category=547783