from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def result(request):
    quiz1 = request.GET['quiz1']
    dap = 0
    if quiz1 == '슬픔':
        dap += 1
        return render(request,'result.html',{'dap':dap})
    else:
        return render(request,'result.html',{'dap':dap})