# Project Euler - Problem 1: Multiples of 3 or 5

def solve_problem_1(limit):
    total_sum = 0
    for i in range(1, limit):
        if i % 3 == 0 or i % 5 == 0:
            total_sum += i
    return total_sum

if __name__ == "__main__":
    limit = 1000
    result = solve_problem_1(limit)
    print(f"The sum of all multiples of 3 or 5 below {limit} is: {result}")
