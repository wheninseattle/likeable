import pickle
import numpy as np
import os
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
import plotly.io as pio
from utility import *
random_state = 2173751

def write_pickle(file, file_name, folder_name=''):
    location = folder_name + file_name
    with open(location, "wb") as f:
        pickle.dump(file, f)

def load_pickle(file_name, folder_name=''):
    location = folder_name + file_name
    with open(location, "rb") as file:
        linked_data = pickle.load(file)
    return linked_data

def point_visualized_3D(df, color=None, size=2, colorscale='Viridis', show_color=True, showscale=True, name='hide', array=False):
    if array:
        if show_color:
            fig = go.Figure(data=[go.Scatter3d(x=df[:,0], y=df[:,1], z=df[:,2],
                    mode='markers', marker=dict(size=size, color=color,
                    colorscale=colorscale, showscale=showscale,
                    colorbar=dict(ticklen=4,thickness=20)),name=name,showlegend=True)])
        else:
            fig = go.Figure(data=[go.Scatter3d(x=df[:,0], y=df[:,1], z=df[:,2],
                    mode='markers', name=name, showlegend=True, marker=dict(size=size))])
    else:
        if show_color:
            df['prediction'] = color
            fig = go.Figure(data=[go.Scatter3d(x=df['x'], y=df['y'], z=df['z'],
                    mode='markers',text=df.index, hoverinfo='text',
                    marker=dict(size=size, color=df['prediction'], colorscale=colorscale, showscale=showscale,
                    colorbar=dict(ticklen=4,thickness=20)),name=name,showlegend=True)])
        else:
            fig = go.Figure(data=[go.Scatter3d(x=df['x'], y=df['y'], z=df['z'],
                    mode='markers',text=df.index, name=name, showlegend=True, hoverinfo='text', marker=dict(size=size))])

    return fig

def remap_series(series, number01, number02):
    range01 = series.max() - series.min()
    range02 = number02 - number01
    factor = range02 / range01
    remapped_series = (series - series.min()) * factor + number01
    return remapped_series