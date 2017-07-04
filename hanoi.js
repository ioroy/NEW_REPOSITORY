function hanoi (n, from, to, tmp) {
    if (n === 0) {
        return;
    }
hanoi(n - 1, from, tmp, to);
console.log(from + "から" + to + "へ移す");
hanoi(n - 1, tmp, from, to);
}

hanoi(20, "A", "B" ,"C")