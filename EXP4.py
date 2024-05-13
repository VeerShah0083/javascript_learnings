import pandas as pd
import sklearn as skl
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
from sklearn.model_selection import train_test_split
import math
from statsmodels.stats.weightstats import ztest as ztest

df = pd.read_csv("BSE.csv")
print(df.head(5))

df.info()
print(df.isnull().sum())

df = df.drop_duplicates()
print(df.count())

df['Open']=df['Open'].fillna(df['Open'].mean())
df['High']=df['High'].fillna(df['High'].mean()) 
df['Low']=df['Low'].fillna(df['Low'].mean()) 
df['Close']=df['Close'].fillna(df['Close'].mean()) 

df['Range'] = df['High'] - df['Low']

print(df.head())

training_data, testing_data = train_test_split(df, test_size=0.25, random_state=0)

print(f"No. of training examples: {training_data.shape[0]}")
print(f"No. of testing examples: {testing_data.shape[0]}")

training_data = df.sample(frac=0.75, random_state=0)
testing_data = df.drop(training_data.index)
print(f"No. of training examples: {training_data.shape}")
print(f"No. of testing examples: {testing_data.shape}")

Y_train = training_data['Open']
print(Y_train.head())

training_data.drop(['Open'],axis=1,inplace=True)

print(testing_data.head())

Y_testing_data = testing_data['Open']
testing_data.drop(['Open'],axis=1,inplace=True)
print(testing_data.head())

print(Y_testing_data.head())

testing_data.shape[0]
label=['Train','Test']
vale=[training_data.shape[0],testing_data.shape[0]]
print(label,vale)
plt.bar(label,vale)
plt.show()

print(training_data.head())

print(f"No. of training examples: {training_data.shape[0]}")
print(f"No. of testing examples: {testing_data.shape[0]}")

x1 = Y_train.mean()
x2 = Y_testing_data.mean()
d = 0
s1 = Y_train.std()
s2 = Y_testing_data.std()
n1 = training_data.shape[0]
n2 = testing_data.shape[0]

z = (x1-x2-d)/math.sqrt((s1**2/n1)+(s2**2/n2))
print(z)

ztest ,pval1 = ztest(Y_train,Y_testing_data, value=0,alternative='two-sided')
print(ztest ,pval1)