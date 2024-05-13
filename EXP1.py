import pandas as pd
import numpy as np
from scipy.stats import mode
df=pd.read_csv('DMAL.csv')

column=['exp1','exp2']
for i in column:
    data=i
    data_column=df[data]
    data_arr=np.array(data_column)
   
    median_value = np.nanmedian(data_arr)
    mean_value = np.nanmean(data_arr)
    quartiles = np.nanpercentile(data_arr, [25, 50, 75])
    mode_value = mode(data_arr)
    std_dev = np.nanstd(data_arr)

    print("\n",i)
    print("Mean : ", mean_value)
    print("Median : ", median_value)
    print("Mode : ", mode_value)
    print("Std_dev : ", std_dev)
    print("First Quartile (Q1):", quartiles[0])
    print("Second Quartile (Q2 or Median):", quartiles[1])
    print("Third Quartile (Q3):", quartiles[2])


# print(df)
# print(df.head(5))
# print(df.info())
# print(df.describe())
# print(df['exp1'].mean())
# print(df['exp1'].median())
# print(df['exp1'].std())
# print(df['exp1'].mode())
# print(df.replace(to_replace=np.nan,value=0))
# print(df['exp1'].quantile([0.25,0.5,0.75]))
# print(df['exp1'].quantile(0.25))