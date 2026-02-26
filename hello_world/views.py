from django.shortcuts import render
from django.http import JsonResponse
from .models import GameScore

# from django.http import HttpResponse
# Create your views here.
# def index(request):
#    return HttpResponse("Hello, World!")

def math_game(request):
    if request.method == "POST":
        # Logic to save the score sent from JavaScript
        correct = request.POST.get('correct')
        incorrect = request.POST.get('incorrect')
        GameScore.objects.create(
            user=request.user, 
            correct_score=correct, 
            incorrect_score=incorrect
        )
        return JsonResponse({"status": "success"})
    
    return render(request, 'game.html')

