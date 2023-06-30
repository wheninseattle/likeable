from utility import *
from dimensionality_reduction import *
from clustering_algorithms import *
random_state = 1201044


if __name__ == "__main__":
    final_df = load_pickle('design_space_test.pkl')
    cost_series = final_df[0] * final_df[1] * 2500

    #do dimensionality reduction
    reduced_dim = T_SNE(final_df, 3)
    reduced_df = pd.DataFrame(reduced_dim)
    reduced_df.to_excel("reduced_df.xlsx")
    # fig = point_visualized_3D(reduced_dim, color=None, size=3, show_color=False, showscale=False, name='hide', array=True)
    # fig.show()
    # print(reduced_dim)

    #do clustering
    output, centers = Kmeans(reduced_dim, number_of_cluster=50)
    # fig = point_visualized_3D(reduced_dim, color=output, size=3,  colorscale='rainbow', show_color=True, showscale=True, name='hide', array=True)
    # fig.show()

    values = list(range(0, 2000))
    clustered_df = pd.DataFrame(values, columns=['0'])
    clustered_df['1'] = pd.DataFrame(output)
    clustered_df['2'] = cost_series

    grouped = clustered_df.groupby('1')['0'].apply(list)
    average_cost = clustered_df.groupby('1')['2'].mean()
    average_cost_long = clustered_df.groupby('1')['2'].transform('mean')

    remapped_cost = remap_series(average_cost, 0, 10)
    remapped_cost_long = remap_series(average_cost_long, 0, 10)
    clustered_df['2'] = remapped_cost_long
    print(remapped_cost)
    
    new_cluster_df = pd.DataFrame()
    new_cluster_df['design_option'] = grouped
    new_cluster_df['reward'] = remapped_cost

    new_cluster_df.to_excel("cluster_df_test.xlsx")
    clustered_df.to_excel("cluster_df_test_long.xlsx")
    print(new_cluster_df)


