from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=4096)
    author_name = models.CharField(max_length=50)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return str(self.id) + " " + self.title