#include <stdio.h>

FILE *fp;
char ch;
char arr[100][100];
int visitied[100][100];
int dx[] = {0, 1, 0, -1};
int dy[] = {1, 0, -1, 0};

int n, m;

void input()
{
  fp = fopen("input.txt", "r");
  fscanf(fp, "%d", &n);
  fscanf(fp, "%d", &m);
  fscanf(fp, "%c", &ch);

  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= m; j++)
    {
      fscanf(fp, "%c", &ch);
      if (ch == '\n')
      {
        fscanf(fp, "%c", &ch);
      }
      arr[i][j] = ch;
    }
  }

  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= m; j++)
    {
      printf("%c", arr[i][j]);
    }
    printf("\n");
  }
}

void init()
{
  for (int i = 0; i < n; i++)
  {
    visitied[i][0] = 1;
    visitied[i][m + 1] = 1;
  }
  for (int j = 0; j < m; j++)
  {
    visitied[0][j] = 1;
    visitied[n + 1][j] = 1;
  }
}

int dfs(int x, int y)
{
  int sum = 1;
  for (int i = 0; i <= 3; i++)
  {
    int u = x + i;
    int v = y + i;
    if (visitied[x][y] == 0 && arr[x][y] == arr[u][v])
    {
      sum = sum + dfs(u, v);
    }
    visitied[x][y] = 1;
  }
  return sum;
}

void solve()
{
  int max = dfs(1, 1);
  for (int i = 1; i <= n; i++)
  {
    for (int j = 1; j <= m; j++)
    {
      if (visitied[i][j] == 0)
      {
        int temp = dfs(i, j);
        if (max < temp)
        {
          max = temp;
        }
      }
    }
  }
  printf("%d", max);
}

int main()
{
  input();
  // Boo vistiied = true;
  init();
  solve();
  return 0;
}
