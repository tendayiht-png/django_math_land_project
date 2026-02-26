from django.db import models
from django.contrib.auth.models import User

class GameScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    correct_score = models.IntegerField(default=0)
    incorrect_score = models.IntegerField(default=0)
    date_played = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.date_played}"
