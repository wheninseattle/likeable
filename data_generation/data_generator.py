import random
import pandas as pd
from utility import *
random_state = 1201044

parameter01 = [x*5 for x in range(50, 100)] #floor plate size (3)
parameter02 = [x for x in range(20, 70)] #floor count (5)
parameter03 = [x*10 for x in range(3, 30)] #sides (2)
parameter04 = [x*(0.01) for x in range(0, 25)] #fillet radius (6)
parameter05 = [x*(0.01)*1000 for x in range(0, 100)] # rotation (1)
parameter06 = [x for x in range(13, 20)] #F2F Height (4)


parameter01 = [x for x in range(50, 100)] #floor plate size (3)
parameter02 = [x for x in range(20, 70)] #floor count (5)
parameter03 = [x for x in range(3, 30)] #sides (2)
parameter04 = [x*(0.01) for x in range(0, 25)] #fillet radius (6)
parameter05 = [x*(0.1) for x in range(0, 100)] # rotation (1)
parameter06 = [x for x in range(13, 20)] #F2F Height (4)

def replace_func01(x):
    return random.choice(parameter01)
    
def replace_func02(x):
    return random.choice(parameter02)
    
def replace_func03(x):
    return random.choice(parameter03)
    
def replace_func04(x):
    return random.choice(parameter04)

def replace_func05(x):
    return random.choice(parameter05)

def replace_func06(x):
    return random.choice(parameter06)


def write_df(data_count=6000):
    parameter01_df = pd.DataFrame([[1]]*data_count, columns=[str(i) for i in range(1)])
    parameter01_df = parameter01_df.applymap(replace_func01)

    parameter02_df = pd.DataFrame([[1]]*data_count, columns=[str(i) for i in range(1)])
    parameter02_df = parameter02_df.applymap(replace_func02)

    parameter03_df = pd.DataFrame([[1]]*data_count, columns=[str(i) for i in range(1)])
    parameter03_df = parameter03_df.applymap(replace_func03)

    parameter04_df = pd.DataFrame([[1]]*data_count, columns=[str(i) for i in range(1)])
    parameter04_df = parameter04_df.applymap(replace_func04)

    parameter05_df = pd.DataFrame([[1]]*data_count, columns=[str(i) for i in range(1)])
    parameter05_df = parameter05_df.applymap(replace_func05)

    parameter06_df = pd.DataFrame([[1]]*data_count, columns=[str(i) for i in range(1)])
    parameter06_df = parameter06_df.applymap(replace_func06)

    df_list = [parameter01_df, parameter02_df, parameter03_df, parameter04_df, parameter05_df, parameter06_df]

    # final_df = pd.concat(df_list, axis=1).sample(frac=1, random_state=random_state)
    final_df = pd.concat(df_list, axis=1)
    return final_df

if __name__ == "__main__":
    final_df = write_df(data_count=2000)
    new_column_names = list(range(6))
    final_df.set_axis(new_column_names, axis=1, inplace=True)
    write_pickle(final_df, 'design_space_test.pkl')
    final_df.to_excel("final_df_test.xlsx")
