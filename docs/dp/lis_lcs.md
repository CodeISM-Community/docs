# LIS and LCS

> A subsequence of a given sequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements [reference - wikipedia](https://en.wikipedia.org/wiki/Subsequence)

## Longest Increasing Subsequence

### Problem

You are given a sequence of $n$ integers and you task is to find the length of the *longest increasing subsequence* from the given sequence array.<br>

### Solution

We can see that if we are somehow told the longest length ending at a particular index, then we can tell the answer in $O(n)$ by finding the maximum of all the lengths.

We will calculate the above told array using a $dp[i]$ which will tell the longest length ending at index $i$.

### Implementation

```cpp
int dp[n];
int LIS(int n, vector<long long> &arr) {
    memset(dp, 1, sizeof dp);
    for(int i = 0; i < n; i++) {
        for(int j = i-1; j >= 0; j--) {
            if(arr[j] <= arr[i]) {
                dp[i] = max(dp[i], 1 + dp[j]);
            }
        }
    }
    int ans = 1;
    for(auto x: dp) ans = max(ans, x);
    return ans;
}
```

## Longest Common Subsequence

### Problem

You are given two sequences $a$ and $b$ and your task is to tell from all the common subsequences from them, what is the length of the longest common subsequence.

### Solution

A $dp[i][j]$ will store the maximum length of the common subsequence upto the $ith$ index of $a$ and $jth$ index of $b$. If we are at this state, we can move to another by just checking the corresponding characters in both sequences.

If the characters at the indices in both sequences are same, then the length can be increased by 1 and the corresponding length upto the previous indices be added.

### Implementation

```cpp
int dp[n+1][m+1];
int LCS(string a, int n, string b, int m) {
    memset(dp, 0, sizeof dp);
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= m; j++) {
            if(a[i-1] == b[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            dp[i][j] = max(dp[i][j], dp[i-1][j]);
            dp[i][j] = max(dp[i][j], dp[i][j-1]);
        }
    }
    return dp[n][m];
}
```

## Practice Problems

- [Codeforces - Palindrome](https://codeforces.com/problemset/problem/335/B)
- [Leetcode - Longest Common Subequence](https://leetcode.com/problems/longest-common-subsequence/)
- [Leetcode - Longest Increasing Subequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [Leetcode - Longest Palindromic Subequence](https://leetcode.com/problems/longest-palindromic-subsequence/)

Authors: {{ git_page_authors }}