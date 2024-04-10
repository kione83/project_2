import time
import pandas as pd
import numpy as np


# total = 0
# for item in range(0,1500000):
#     total += item

# print(total)

# print(end - start, "seconds") # about 7/100th of a second on my machine

# begin = time.time()
# print(np.sum(np.arange(1500000)))
# finish = time.time()
# print(finish - begin, "seconds") #about 1/1000th of a second on my machine

df = pd.DataFrame(np.random.randint(0,50, size=(5000000, 4)), columns=('a','b','c','d'))
df.shape
df.head()


start = time.time()
# for idx, row in df.iterrows():
#     df.at[idx, 'ratio'] = 100 * (row['d'] / row['c'])
#     #print the ratio
#     print(df.at[idx, 'ratio'])



df['ratio'] = 100 * (df['d'] / df['c'])
print(df['ratio'])
end = time.time()
print(end - start, "seconds") 