import pandas
import geopandas as gp
import matplotlib.pyplot as plt


geojson = gp.read_file('./delegations-full.geojson')
geojson.plot()

# print(geojson)
# geodataframe = geojson[['deleg_na_1', 'geometry']].to_crs('+proj=robin')
# print(geodataframe.sample(5))

# data = pandas.read_csv('./tunisie_data.csv')
# print(data.sample(5))

# merged = geodataframe.merge(data, left_on='deleg_na_1', right_on='name_fr')
# print(merged.describe())
# print(merged)

# colors = 9
# cmap = 'Blues'
# figsize = (16, 10)
# year = '2019'
# cols = ['circonscription', 'toto', 'an']  # ['Country Name', 'Country Code', year]
# title = 'Test carte {}'.format(year)
# imgfile = '{}.png'.format('test_carte')
# description = '''
#     test test test '''.strip()
# 
# # merged.dropna().plot(
# #     column=year, 
# #     cmap=cmap, 
# #     figsize=figsize, 
# #     scheme='equal_interval', 
# #     k=colors, 
# #     legend=True
# # )
# merged.plot()

plt.show()
