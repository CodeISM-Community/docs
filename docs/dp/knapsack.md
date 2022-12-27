# Knapsack

## Introduction

Dynamic Programming(DP in short) is an algorithmic approach which deals with the optimal answer for every possible case of a problem. When with brute-force, the time complexity of some algorithms may exceed the limits, DP comes to our rescue.<br>

### Types

- <b>Optimal Sub-structure</b> (when there is a global optimal answer to be found)
- <b>Overlapping Subproblem</b> (when there is a subproblem which is required to compute again and again)

### Some important terms
- <b>State</b> - The dependency list of the function to compute
- <b>Transition</b> - The formula by which we calculate new states from pre-calculated states
- <b>Base Condition</b> - The condition which stops further calculation of states
- <b>Target</b> - The final state which is needed

## Knapsack

Knapsack is a classic problem of DP which revolves around making choices for an element to be taken or not. We will cover the whole knapsack starting from scratch.<br>

### Problem
You are given an array <b>W</b> of **n** numbers representing weights of objects, also you are given a target weight <b>K</b>. You have to compute whether it is possible to make target weight K from the given weights.

### Solution
We can observe in this problem that if we need to build target weight K from the given weights, we can think of a brute force solution to check for all weights that can be formed using the given weights.<br>
Let's declare a 2D boolean vector <b>dp[i][j]</b> which will store whether it is possible to make target weight **j** from the first **i** weights.<br>
The transition can be thought as if it is possible to make a target weight **j** from the first **i** elements, then ofcourse j is possible from i+1 to n.<br>

State - 

$$ dp[i][j] = \begin{cases} 
1 &\text{if possible} \\ 
0 &\text{if not} 
\end{cases} $$

Transition - 

$$ dp[i][j] = dp[i-1][j-W[i]] | dp[i-1][j] $$

## Implementation

```cpp
bool dp[n+1][K+1];
long long knapsack(int n, int K, int W[]) {
    dp[0][0] = true;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j <= K; j++) {
            if(j >= W[i]) {
                dp[i][j] = dp[i-1][j] | dp[i-1][j-W[i]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
}
```