# Binary Exponentiation

Binary exponentiation (also known as exponentiation by squaring) is a trick which allows to calculate  $a^n$  using only  $O(\log n)$  multiplications (instead of  $O(n)$  multiplications required by the naive approach).

## Algorithm

Raising  $a$  to the power of  $n$  is expressed naively as multiplication by  $a$  done  $n - 1$  times:  $a^{n} = a \cdot a \cdot \ldots \cdot a$ . However, this approach is not practical for large  $a$  or  $n$ .

The idea of binary exponentiation is, that we split the work using the binary representation of the exponent.

Let's write $n$ in base 2, for example:

$$ \begin{align} \notag
a^{13} &= a^{1101_2} \\ \notag
&= a^{1000_2} \cdot a^{100_2} \cdot a^{0_2} \cdot a^{1_2} \\ \notag
&= a^8 \cdot a^4 \cdot a^1
\end{align} $$

For example, with $a = 3$

$$\begin{align} \notag
3^1 &= 3 \\ \notag
3^2 &= \left(3^1\right)^2 = 3^2 = 9 \\ \notag
3^4 &= \left(3^2\right)^2 = 9^2 = 81 \\ \notag
3^8 &= \left(3^4\right)^2 = 81^2 = 6561
\end{align}$$

So to get the final answer for  $3^{13}$ , we only need to multiply three of them (skipping  $3^2$  because the corresponding bit in  $n$  is not set):  $3^{13} = 6561 \cdot 81 \cdot 3 = 1594323$ 

The final complexity of this algorithm is  $O(\log n)$ : we have to compute  $\log n$  powers of  $a$ , and then have to do at most  $\log n$  multiplications to get the final answer from them.

The following recursive approach expresses the same idea:

$$ a^n = \begin{cases} 
1 &\text{if } n == 0 \\ 
\left(a^{\frac{n}{2}}\right)^2 &\text{if } n > 0 \text{ and } n \text{ even} \\ 
\left(a^{\frac{n - 1}{2}}\right)^2 \cdot a &\text{if } n > 0 \text{ and } n \text{ odd} \\ 
\end{cases} $$

## Implementation

The recursive approach is the direct translation of the formula above.

```cpp
long long binpow(long long a, long long n) {
    if(n == 0) 
        return 1;
    long long res = binpow(a, n / 2);
    if(b % 2 == 0) 
        return res * res;
    else 
        return res * res * a;
}
```

The second approach accomplishes the same task without recursion. It computes all the powers in a loop, and multiplies the ones with the corresponding set bit in  $n$ . Although the complexity of both approaches is identical, this approach will be faster in practice since we don't have the overhead of the recursive calls.

It uses the fact that everytime in a loop we are squaring the powers, and when there is $1$ in binary representation of $n$ ($i.e.$ if n becomes odd at some moment after continuous division) we multiply by an extra $a$.

```cpp
long long binpow(long long a, long long n) {
    long long res = 1;
    while (n > 0) {
        if (n & 1)
            res = res * a;
        a = a * a;
        n >>= 1;
    }
    return res;
}
```

## Applications

### Effective computation of large exponents modulo _m_

Many times we need not compute the exact exponents rather the problem demands us to compute a large power (often, a big prime number) and to do it we can use _binary exponentiation_ with a slight change reflected in the code below.

```cpp hl_lines="2 6 7"
long long binpow(long long a, long long n, long long m) {
    a %= m;
    long long res = 1;
    while (n > 0) {
        if (n & 1)
            res = res * a % m;
        a = a * a % m;
        n >>= 1;
    }
    return res;
}
```

### Multiplication of two numbers modulo _m_

If we need to calculate multiplication of two very large numbers which themselves can fit in `long long` data types but their product cannot, then we can modify the binary exponentiation to compute it modulo $m$ within range.

The idea is to break any of the two numbers into binary and instead of doing exponent, this time we need to multiply with that number.

For exmample:

$$ \begin{align} \notag
a \cdot 13 &= a \cdot 1101_2 \\ \notag
&= {a \cdot 1000_2} + {a \cdot 100_2} + {a \cdot 0_2} + {a \cdot 1_2} \\ \notag
&= {a \cdot 8} + {a \cdot 4} + {a \cdot 1}
\end{align} $$

We can note by the above example that we are adding to our $ans$ whenever there is a $set$ bit present in binary of $b$.
The recursive formula for the above idea can be framed as:

$$ a \cdot b = 
\begin{cases} 
0 &\text{if } b = 0 \\ 
2 \cdot a \cdot \frac{b}{2} &\text{if }b > 0 \text{ and }b \text{ even} \\ 
2  \cdot a \cdot \frac{b-1}{2} + a &\text{if }b > 0 \text{ and }b \text{ odd} 
\end{cases} $$ 

The same code for the binary exponentiation can be reused with some slight modifications:

```cpp
long long modmul(long long a, long long b, long long m) {
    a %= m;
    b %= m;
    long long res = 0;
    while (b > 0) {
        if (b & 1)
            res = res + a % m;
        a = 2 * a % m;
        b >>= 1;
    }
    return res;
}
```

## Pratice Problems

- [Codeforces - Parking Lot](https://codeforces.com/problemset/problem/630/I)
- [SPOJ - The last digit](https://www.spoj.com/problems/LASTDIG/)
- [SPOJ - Magic of the locker](https://www.spoj.com/problems/LOCKER/)
- [SPOJ - Just add it](https://www.spoj.com/problems/ZSUM/)

### References

- [cp-algorithms - Binary Exponentiation](https://cp-algorithms.com/algebra/binary-exp.html)
- [GFG - Modular Multiplication](https://www.geeksforgeeks.org/multiply-large-integers-under-large-modulo/)

### Authors
{{ git_page_authors }}