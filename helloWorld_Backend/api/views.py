from urllib import response
from django.shortcuts import render
from django.http import JsonResponse

import openai
import os


openai.api_key = os.getenv('OPENAI_API_KEY')


def helloWorld(request):
    return JsonResponse({'message': 'Hello World'})


def chatWgpt(request):
    userMessage = request.GET.get('message', '')
    if userMessage:
        response = openai.ChatCompletion.create(
            engine="text-davinci-003",
            prompt=userMessage,
            maxTokens=150
        )
        gptResponse = response.choices[0].text.strip()
        return JsonResponse({'response': gptResponse})
    else:
        return JsonResponse({'error': 'No message provided'}, status=400)
