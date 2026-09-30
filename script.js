// Helper function to parse input strings into numbers array
function parseListInput(inputStr) {
    if (!inputStr) return [];
    return inputStr
        .trim()
        .split(/[\s,]+/) // Split by comma or space
        .map(num => parseInt(num, 10))
        .filter(num => !isNaN(num));
}

// Ex 2: Sum of multiples of a or b below n
function sumMultiplesBelowN(a, b, n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
}

// Ex 2.1 Handler
function runEx2() {
    const a = parseInt(document.getElementById('ex2_a').value, 10);
    const b = parseInt(document.getElementById('ex2_b').value, 10);
    const n = parseInt(document.getElementById('ex2_n').value, 10);

    const result = sumMultiplesBelowN(a, b, n);
    document.getElementById('res2').innerText = result;
}

// Ex 3: Sum of multiples of a or b in list l
function sumMultiplesInList(a, b, listL) {
    let sum = 0;
    for (let num of listL) {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    }
    return sum;
}

// Ex 3.1 Handler
function runEx3() {
    const a = parseInt(document.getElementById('ex3_a').value, 10);
    const b = parseInt(document.getElementById('ex3_b').value, 10);
    const listL = parseListInput(document.getElementById('ex3_l').value);

    const result = sumMultiplesInList(a, b, listL);
    document.getElementById('res3').innerText = result;
}

// Ex 5: Sum of multiples of factors in list f in list m
function sumMultiplesOfFactors(factorsF, listM) {
    let sum = 0;
    for (let num of listM) {
        // Check if num is divisible by ANY factor in factorsF
        const isMultiple = factorsF.some(factor => factor !== 0 && num % factor === 0);
        if (isMultiple) {
            sum += num;
        }
    }
    return sum;
}

// Ex 5.1 Handler
function runEx5() {
    const factorsF = parseListInput(document.getElementById('ex5_f').value);
    const listM = parseListInput(document.getElementById('ex5_m').value);

    const result = sumMultiplesOfFactors(factorsF, listM);
    document.getElementById('res5').innerText = result;
}
// Exercise 6: Calculate total cost from basket and prices objects
function getTotalCost(basket, prices) {
    let totalCost = 0;
    for (let item in basket) {
        if (prices[item] !== undefined) {
            totalCost += basket[item] * prices[item];
        }
    }
    return totalCost;
}

// Exercise 6 Handler
function runEx6() {
    // Example objects as specified in the exercise
    const prices = { "apple": 100, "banana": 40, "orange": 60 };
    const basket = { "apple": 2, "banana": 5 };

    const total = getTotalCost(basket, prices);
    document.getElementById('res6').innerText = total;
}
