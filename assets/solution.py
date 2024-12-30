def max_gold(n, m, grid):
    # Create a DP table to store the maximum gold collected up to each cell
    dp = [[0] * m for _ in range(n)]

    # Initialize the first column of the DP table
    for i in range(n):
        dp[i][0] = grid[i][0]

    # Fill the DP table column by column
    for col in range(1, m):
        for row in range(n):
            # Collect gold from the left cell (Right movement)
            left = dp[row][col - 1]

            # Collect gold from the left-upper diagonal cell (Right-Up movement)
            left_up = dp[row - 1][col - 1] if row > 0 else 0

            # Collect gold from the left-lower diagonal cell (Right-Down movement)
            left_down = dp[row + 1][col - 1] if row < n - 1 else 0

            # Update the current cell in the DP table with the maximum gold collected
            dp[row][col] = grid[row][col] + max(left, left_up, left_down)

    # Find the maximum gold collected from the last column
    max_gold = 0
    for i in range(n):
        max_gold = max(max_gold, dp[i][m - 1])

    return max_gold

# Example usage:
    """
    nput:
n = 3, m = 4
grid = [
    [1, 3, 1, 5],
    [2, 2, 4, 1],
    [5, 0, 2, 3]
]

Output: 16

    """
n=int(input())
m=int(input())
grid=[]
for i in range(0,n):
  row=[]
  for j in range(0,m):
    row.append(int(input()))
  grid.append(row)

print(max_gold(n, m, grid))  # Output: 16
