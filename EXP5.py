import numpy as np
import matplotlib.pyplot as plt

a = np.random.randint(100, size = 100)
print(a)

std = (np.std(a))
print("Standard Deviation of sample is: % s "% std)

mean = np.mean(a)

z = (a-mean)/std

print("Z Scores of first 5 numbers:", z[:5])

q1 = np.percentile(a, 25)
q3 = np.percentile(a, 75)

iqr = q3-q1

print("Inter Quartile Range:", iqr)

plt.boxplot(a)
plt.xlabel('Random Numbers')
plt.ylabel('Values')
plt.title('Box Plot for Randomly Generated Numbers')
plt.show()

lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr

outliers = (a < lower_bound) | (a > upper_bound)
filtered_data = a[~outliers]
print("Outliers:", a[outliers])
print("Filtered Data:", filtered_data)

plt.boxplot([a, filtered_data], labels=['Original Data', 'Filtered Data'])
plt.xlabel('Data')
plt.ylabel('Values')
plt.title('Box Plot for Randomly Generated Numbers')
plt.show()





import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_csv("age_bmi.csv")
print(df.head())

q1 = np.percentile(df["Age"], 25)
q3 = np.percentile(df["Age"], 75)
iqr = q3-q1
print("Inter Quartile Range:", iqr)

lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr

outliers = (df["Age"] < lower_bound) | (df["Age"] > upper_bound)
filtered_data = df["Age"][~outliers]
print("Outliers:", df["Age"][outliers])
print("Filtered Data:", filtered_data)

plt.boxplot([df["Age"], filtered_data], labels=['Original Data', 'Filtered Data'])
plt.xlabel('Data')
plt.ylabel('Values')
plt.title('Box Plot for Randomly Generated Numbers')
plt.show()

plt.scatter(df["Age"], df["BMI"])
plt.xlabel('Age')
plt.ylabel('BMI')
plt.title('Scatter Plot of Age and BMI')
plt.show()
