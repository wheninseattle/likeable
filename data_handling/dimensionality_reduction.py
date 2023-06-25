import itertools
import random
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import numpy as np

from utility import *
from utility import *
from itertools import *
from sympy import *

from dimensionality_reduction import *


from sklearn import decomposition
from sklearn.cluster import FeatureAgglomeration
from sklearn import random_projection
from sklearn.manifold import TSNE
from sklearn.manifold import MDS
from sklearn.manifold import Isomap
from sklearn.manifold import SpectralEmbedding
from sklearn.manifold import LocallyLinearEmbedding
from progress.bar import Bar
random_state = 2173751
random.seed(random_state)


def T_SNE(df, n_components, perplexity=30, early_exaggeration=12):
    X = df
    T_SNE = TSNE(n_components=n_components, learning_rate='auto',init='random', perplexity=perplexity,
                 early_exaggeration=early_exaggeration, angle=1, random_state=random_state)
    X = T_SNE.fit_transform(X)
    return X

# def T_SNE(df, n_components):
#     X = df
#     T_SNE = TSNE(n_components=n_components, random_state=random_state)
#     X = T_SNE.fit_transform(X)
#     return X

def PCA(df, n_components):
    X = df
    PCA = decomposition.PCA(n_components=n_components, svd_solver='auto', random_state=random_state)
    PCA.fit(X)
    X = PCA.transform(X)
    return X

def MD_S(df, n_components):
    X = df
    embedding = MDS(n_components=n_components, normalized_stress='auto', random_state=random_state)
    X = embedding.fit_transform(X)
    return X

def iso_map(df, n_components):
    X = df
    embedding = Isomap(n_neighbors=50, n_components=n_components, eigen_solver='arpack')
    X = embedding.fit_transform(X)
    return X

def spect_emd(df, n_components):
    X = df
    embedding = SpectralEmbedding(n_components=n_components)
    X = embedding.fit_transform(X)
    return X

def feature_agglomeration(df, n_components):
    X = df
    agglo = FeatureAgglomeration(n_clusters=n_components, linkage='single')
    X = agglo.fit_transform(X)
    return X

def random_projection_func(df, n_components):
    X = df
    transformer = random_projection.SparseRandomProjection()
    X = transformer.fit_transform(X)
    print(X.shape)
    return X

def locally_linear(df, n_components):
    X = df
    embedding = LocallyLinearEmbedding(n_neighbors=2, n_components=n_components, eigen_solver='dense')
    X = embedding.fit_transform(X)
    return X



