from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Question, Choice

# Create your views here.
def index(request):
    context = {'course': "CSE-30332", 'semester': 'Fall 22'}
    return render(request, 'poll/index.html', context)

class IndexView(ListView):
    template_name = "poll/index.html"
    context_object_name = "questions"

    def get_queryset(self):
        return Question.objects.order_by("-pub_date") #sets the queryset as the descending order - means desceding 

class ResultsView(DetailView):
    model = Question
    template_name = "poll/results.html"