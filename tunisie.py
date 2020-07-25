import pandas
import geopandas as gp
import matplotlib.pyplot as plt


geojson = gp.read_file('./delegations-full.geojson')
geojson.plot()
plt.show()
