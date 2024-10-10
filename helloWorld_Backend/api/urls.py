from django.urls import path
from . import views


urlpatterns = [
    path('hello/', views.helloWorld, name='helloWorld'),
    path('voice_to_expense/', views.voice_to_expense, name='voice_to_expense'),
]
