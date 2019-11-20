from django.contrib import admin
from django.urls import path
import mindapp.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',mindapp.views.home, name='home'),
    path('result/',mindapp.views.result, name='result'),
]
