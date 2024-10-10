from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv
from django.http import JsonResponse
from wit import Wit
import os


load_dotenv()

WIT_API_TOKEN = os.getenv('WIT_API_TOKEN')
client = Wit(WIT_API_TOKEN)


def helloWorld(request):
    return JsonResponse({'message': 'Hello World'})


@csrf_exempt
def voice_to_expense(request):
    try:

        response = client.message("Hello, this is a test")

        if 'entities' in response:
            return JsonResponse({'message': 'Wit.ai Response: ' + str(response)})
        else:
            return JsonResponse({'error': 'No response found from Wit.ai'}, status=400)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
