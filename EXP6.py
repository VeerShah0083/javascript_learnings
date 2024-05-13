import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

x1 = np.linspace(0, 10, 100)
fig = plt.figure()
plt.plot(x1, np.sin(x1), '-')
plt.plot(x1, np.cos(x1), '--')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Sine and Cosine Functions')
plt.legend(['Sine', 'Cosine'])
plt.show()

plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.show()

x = np.linspace(0, 2, 100)
plt.plot(x, x, label='linear')
plt.plot(x, x**2, label='quadratic')
plt.plot(x, x**3, label='cubic')
plt.xlabel('x label')
plt.ylabel('y label')
plt.title("Simple Plot")
plt.legend()
plt.show()

t = np.arange(0., 5., 0.2)
plt.plot(t, t, 'r--', t, t*2, 'bs', t, t*3, 'g^')
plt.show()

fig = plt.figure()
ax1 = fig.add_subplot(2, 2, 1)
ax2 = fig.add_subplot(2, 2, 2)
ax3 = fig.add_subplot(2, 2, 3)
ax4 = fig.add_subplot(2, 2, 4)
plt.show()

plt.plot([1, 3, 2, 4], 'b-')
plt.show()

x4 = range(1, 5)
plt.plot(x4, [xi*1.5 for xi in x4],'r')
plt.plot(x4, [xi*3 for xi in x4],'b')
plt.plot(x4, [xi/3.0 for xi in x4],'g')
plt.show()

# ax = plt.axes()
x7 = np.linspace(0, 10, 30)
y7 = np.sin(x7)
plt.plot(x7, y7, 'o', color = 'black')
plt.show()

data1 = np.random.randn(1000)
plt.hist(data1)
plt.show()

data2 = [5. , 25. , 50. , 20.]
plt.bar(range(len(data2)), data2)
plt.show()

data2 = [5. , 25. , 50. , 20.]
plt.barh(range(len(data2)), data2)
plt.show()

x9 = np.arange(0, 4, 0.2)
y9 = np.exp(-x9)
e1 = 0.1 * np.abs(np.random.randn(len(y9)))
plt.errorbar(x9, y9, yerr = e1, fmt = '.-')
plt.show()

A = [15., 30., 45., 22.]
B = [15., 25., 50., 20.]
z2 = range(4)
plt.bar(z2, A, color = 'b')
plt.bar(z2, B, color = 'r', bottom = A)
plt.show()

plt.figure(figsize=(7,7))
x10 = [35, 25, 20, 20]
labels = ['Computer', 'Electronics', 'Mechanical', 'Chemical']
plt.pie(x10, labels=labels)
plt.show()

data3 = np.random.randn(100)
plt.boxplot(data3)
plt.show()

x12 = range(1, 6)
y12 = [1, 4, 6, 8, 4]
plt.fill_between(x12, y12)
plt.show()

matrix1 = np.random.rand(10, 20)
cp = plt.contour(matrix1)
plt.show()

x15 = np.arange(1, 5)
plt.plot(x15, x15*1.5, x15, x15*3.0, x15, x15/3.0)
plt.grid(True)
plt.show()

u = [5, 4, 9, 7, 8, 9, 6, 5, 7, 8]
plt.plot(u)
plt.xticks([2, 4, 6, 8, 10])
plt.yticks([2, 4, 6, 8, 10])
plt.show()