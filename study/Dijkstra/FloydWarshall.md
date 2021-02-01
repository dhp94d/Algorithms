# 플로이드 워샬(FloydWarshall) 알고리즘

목표: 플로이드 워샬알고리즘에 대해 이해하고, 기본문제를 풀어보자



tip. 그래프에서 정점끼리의 최단 경로를 구하는 문제들

1. 하나의 정점에서 다른 하나의 정점까지 최단 경로를 구하는 문제
2. 하나의 정점에서 다른 모든 정점까지의 최단 경로를 구하는 문제
3. 하나의 목적지로 가는 모든 최단 경로를 구하는 문제
4. 마지막으로 모든 최단 경로를 구하는 문제

여기서 플로이드 워샬은 네 번째 방법!

## 소개

- 특정 경로 안에 무수히 많은 경로가 있을 때, 중간 정점들이 각각 최단이 된다면 이를 모두 이은 경로 또한 최단이 된다는 개념!
- 다익스트라와 다르게 음의 가중치를 가진 간선 사용 가능



## 기본 로직

플로이드 워샬에서는 2개의 테이블을 사용하는데, 하나는 모든 경로에 대한 비용을 저장하는 테이블, 나머지 하나는 각 정점까지 가지 직전의 정점을 저장한 테이블입니다. 각 테이블을 D와 P라고 하겠습니다.

처음 D와 P에는 초기값으로 인접 리스트에 대한 내용만 들어가게 됩니다. 

![image](https://user-images.githubusercontent.com/68668924/106095460-2f72fe80-6177-11eb-97de-25a8c7a715e6.png)







![image](https://user-images.githubusercontent.com/68668924/106095476-3568df80-6177-11eb-858f-ec138f15afb5.png)



이 때 1을 중간 경로로 하는 테이블을 구해보자면 

![image](https://user-images.githubusercontent.com/68668924/106095584-60ebca00-6177-11eb-82d9-9dfbe8cddaae.png)

로 갱신이 되며, 갱신될 시 테이블의 P의 해당 컬럼 또한 1로 갱신이 됩니다. 직전 경로가 갱신되므로 테이블 P를 이용하면 최단 경로 또한 구할 수 있습니다.



![image](https://user-images.githubusercontent.com/68668924/106095655-7cef6b80-6177-11eb-98bf-e6b5a411bb4c.png)


![image](https://user-images.githubusercontent.com/68668924/106146589-3111e600-61ba-11eb-88db-6d6afc350d8a.png)


참조: https://hsp1116.tistory.com/45?category=547783
