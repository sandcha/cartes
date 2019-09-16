import geopandas as gp
import matplotlib.pyplot as plt


geojson = gp.read_file('./delegations-full.geojson')

print("Degrés", geojson.length)
deg2km = 111  # https://ocefpaf.github.io/python4oceanographers/blog/2015/03/30/geo_pandas/
print("Kilomètres", geojson.length * deg2km)

geojson.plot()
plt.show()
