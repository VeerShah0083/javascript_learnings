import pandas as pd
import numpy as np
import statistics as st

df=pd.read_csv('DMAL.csv')
missing_values = df.isnull().sum()
print(missing_values)

df_clean = df.dropna()

df_unique = df.drop_duplicates()

print("Original shape:", df.shape)
print("Unique shape:", df_unique.shape)

df_clean.to_csv('clean_data.csv', index=False)

# df = pd.read_csv("DMAL.csv")
# print(df)

# res1 = df.notnull()
# print(res1)

# print(df.isnull().sum())

# res2 = df.isnull()
# print(res2)

# drop = df.dropna()
# print(drop)

# dropx = df.dropna(axis=0)
# print(dropx)

# dropy = df.dropna(axis=1)
# print(dropy)

# fill = df.fillna(10)
# print (fill)

# # fill_back = df.fillna(method='bfill', axis=0)

# fill_back=df.bfill(axis=0)
# print(fill_back)

# # fill_forw = df.fillna(method='ffill')
# fill_forw=df.ffill(axis=0)
# print(fill_forw)

# rep=df.replace(21, 35)
# print(rep)

# mean = df.mean(numeric_only=True)
# rep_mean=df.replace(to_replace=np.nan, value=mean)
# print(rep_mean)

# med = df.median(numeric_only=True)
# rep_med=df.replace(to_replace=np.nan, value=med)
# print(rep_med)

# mod = st.mode(df.select_dtypes(include=np.number).stack())
# rep_mod = df.replace(to_replace=np.nan, value=mod)
# print(rep_mod)

# print(df.interpolate(method ='linear', limit_direction ='forward'))