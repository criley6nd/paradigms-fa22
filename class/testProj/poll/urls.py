from django.urls import path

from . import views
app_name = 'poll'
urlpatterns = [
    path('', views.IndexView.as_view()), # you already have the /polls extension so you can use the empty string
    path('<int:pk>/results/', views.ResultsView.as_view(), name="Results") # means you are going to put an int there
]