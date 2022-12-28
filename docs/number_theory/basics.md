# Number Theory Basics

## Modulus Operation

`%` is an operator which is frequently used in number theory. It stands for the remainder in CS theory.

Examples -
- $5 \mod 2 = 1$ 
- $23 \mod 8 = 7$

The value of a modular operation can lie in the range $0$ to $m-1$ $i.e.$

$$ 0 \le a(\bmod m) \le m-1 $$

Generally, in competitive programming problems, value of $m$ is given as $10^9+7$ or $998,244,353$, which are two big prime numbers.

## Modular Arithmetic

- $(a + b)\mod m = (a\mod m + b\mod m) \mod m$
- $(a - b)\mod m = (a\mod m - b\mod m) \mod m$
- $(a \times b)\mod m = (a\mod m \times b\mod m) \mod m$
- $(\frac a b)\mod m = (a\mod m \times b^{-1}\mod m) \mod m$ *(We will cover the modular inverse shortly)*

## Euler Totient Function

$\phi(n)$ = # of numbers from $1$ to $n$ which are coprime to n. <br>
The formula for calculating this was given by Euler $i.e.$

$$ \phi(n) = n\left(1 -\frac 1 p_1\right)\left(1 -\frac 1 p_2\right)\left(1 -\frac 1 p_3\right) ... $$

### Euler's Theorem

$$ a^{\phi(m)} \equiv 1 \pmod m $$

If we multiply both sides by $a^{-1}$ we will get

$$ a^{\phi(m) - 1} \equiv a^{-1} \pmod m $$

According to Euler Totient function definition, if the number $m$ is taken a prime(which is the case most of the time in competitive programming), then the $\phi(n)$ becomes $m-1$ therefore the **modular inverse** of any number may be calculated as

$$ a^{-1} = a^{m-2} \pmod m $$

The exponent $(m-2)$ can be huge ($O(10^9)$) in CP problems so we will use a teqnique called **_Binary Exponentiation_** to calculate the modular exponents efficiently.