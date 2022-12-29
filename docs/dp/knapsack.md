# Knapsack

## Introduction

Dynamic Programming(DP in short) is an algorithmic approach which deals with the optimal answer for every possible case of a problem. When with brute-force, the time complexity of some algorithms may exceed the limits, DP comes to our rescue.<br>

### Types

- **Optimal Sub-structure** (when there is a global optimal answer to be found)
- **Overlapping Subproblem** (when there is a subproblem which is required to compute again and again)

### Some important terms

- **State** - The dependency list of the function to compute
- **Transition** - The formula by which we calculate new states from pre-calculated states
- **Base Condition** - The condition which stops further calculation of states
- **Target** - The final state which is needed

## Knapsack

Knapsack is a classic problem of DP which revolves around making choices for an element to be taken or not. We will cover the whole knapsack starting from scratch.<br>

### Problem
You are given an array $W$ of $n$ numbers representing weights of objects. You have to compute whether it is possible to make target weight $K$ from the given weights.

A naive recursive $O(2^n)$ solution to this problem would be to recurse for all possible subsets of the given weights.

```cpp
bool knapsack(int index, int n, vector<long long> &W, long long K) {
    if(index >= n) return K == 0;
    else if(K == 0) return true;
    if(W[index] <= K) {
        return knapsack(index + 1, n, W, K - W[index]) | knapsack(index + 1, n, W, K);
    } else {
        return knapsack(index + 1, n, W, K);
    }
}
```

### Solution using DP
We can observe that using recursion, the same subtree is calculated multiple times.<br>

This repetition can be avoided if the results are stored for every state. This is called *Memoization*. Let's declare a 2D boolean vector $dp[i][j]$ which will store whether it is possible to make target weight $j$ from the first $i$ weights.<br>

$$ dp[i][j] = \begin{cases} 
1 &\text{if possible} \\ 
0 &\text{if not} 
\end{cases} $$

$$ dp[i][j] = dp[i-1][j-W[i]] | dp[i-1][j] $$

## Implementation

The memoization solution $O(n\times K)$ can be written easily by a few lines of code in the original recursive function.

```cpp hl_lines="5 7 9"
memset(dp, -1, sizeof dp);
bool knapsack(int index, int n, vector<long long> &W, long long K) {
    if(index >= n) return K == 0;
    else if(K == 0) return true;
    if(dp[index][K] != -1) return dp[index][K];
    if(W[index] <= K) {
        return dp[index][K] = knapsack(index + 1, n, W, K - W[index]) | knapsack(index + 1, n, W, K);
    } else {
        return dp[index][K] = knapsack(index + 1, n, W, K);
    }
}
```

Another approach for DP is the iterative approach. 
```cpp
bool dp[n+1][K+1];
long long knapsack(int n, long long K, vector<long long> &W) {
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

## Extended Problems

1. What if every object has a value $V_i$ associated to it and your task is to maximize the value? 
2. Solve if $K$ target may not have to be fullfilled while maximizing the value.
3. Now if the target weight always be only a multiple of $K$, then finad the maximum sum of values. 

## Practice Problems

- [Atcoder - Frog](https://atcoder.jp/contests/dp/tasks/dp_b)
- [CSES - Book Shop](https://cses.fi/problemset/task/1158/)
- [Atcoder - Vacations](https://atcoder.jp/contests/dp/tasks/dp_c)
- [Codeforces - Boredom](https://codeforces.com/problemset/problem/455/A)