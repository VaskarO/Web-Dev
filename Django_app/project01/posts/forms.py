from django import forms
from . import models

class NewPost(forms.ModelForm):
    class Meta:
        model = models.Post
        fields = ['title', 'body', 'slug', 'image']
