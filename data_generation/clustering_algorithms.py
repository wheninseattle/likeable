import itertools
import random
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import numpy as np

from itertools import *
from sympy import *
from dimensionality_reduction import *


from sklearn import decomposition
from sklearn.cluster import KMeans
from sklearn.cluster import AgglomerativeClustering
from sklearn.cluster import AffinityPropagation
from sklearn.cluster import SpectralClustering
from sklearn.cluster import DBSCAN
from sklearn.cluster import MeanShift, estimate_bandwidth
from sklearn_som.som import SOM
from progress.bar import Bar
random_state = 2173751
random.seed(random_state)

def Spectral_Clustering(df, number_of_cluster=5):
    X = df
    model = SpectralClustering(n_clusters=number_of_cluster, assign_labels='discretize', random_state=random_state)
    model.fit(X)
    output = model.labels_

    centers = np.zeros((model.n_clusters, X.shape[1]))
    for i in range(model.n_clusters):
        centers[i] = np.mean(X[model.labels_ == i], axis=0)
    return output, centers

def Agglomerative_Clustering(df, number_of_cluster=5):
    X = df
    model = AgglomerativeClustering(linkage="average", n_clusters=number_of_cluster)
    model.fit(X)
    output = model.labels_

    centers = np.zeros((model.n_clusters, X.shape[1]))
    for i in range(model.n_clusters):
        centers[i] = np.mean(X[model.labels_ == i], axis=0)

    return output, centers


def Kmeans(df, number_of_cluster=5):
    X = df
    model = KMeans(n_clusters=number_of_cluster, random_state=random_state, n_init="auto")
    model.fit(X)
    output = model.predict(X)
    centers = model.cluster_centers_
    return output, centers

def DB_SCAN(df, eps=0.5, min_samples=5):
    X = df
    model = DBSCAN(eps=eps, min_samples=min_samples)
    model.fit(X)
    output = model.labels_
    return output

def self_organizng_map(df, m=45, n=1):
    dim = len(list(df.columns))
    X = df.to_numpy()
    # print(X)
    model = SOM(m=m, n=n, dim=dim, random_state=random_state)
    model.fit(X)
    output = model.fit_predict(X)
    return output

def meanShift_clustering(df, quantile=0.003):
    X = df
    bandwidth = estimate_bandwidth(X, quantile=quantile)
    model = MeanShift(bandwidth=bandwidth)
    model.fit(X)

    output = model.labels_
    centers = model.cluster_centers_

    labels_unique = np.unique(output)
    n_clusters_ = len(labels_unique)
    print('number of clusters by Minshift', n_clusters_)

    return output, centers

def Affinity_Propagation(df):
    X = df
    model = AffinityPropagation(random_state=random_state)
    model.fit(X)
    output = model.predict(X)
    centers = model.cluster_centers_
    return output, centers