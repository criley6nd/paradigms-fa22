from django.urls import path

from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.IndexView.as_view()),
    path('<int:pk>/', views.ResultsView.as_view(), name="Results")
]