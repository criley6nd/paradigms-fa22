from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView, DetailView
from .models import Post


# Create your views here.
def index(request):
    context = {'course': "CSE-30332", 'semester': 'Fall 22'}
    return render(request, 'blog/index.html', context)

class IndexView(ListView):
    template_name = "blog/index.html"
    context_object_name = "posts"

    def get_queryset(self):
        return Post.objects.order_by("-pub_date")

class ResultsView(DetailView):
    model = Post
    template_name = "blog/results.html"