import requests
import simplejson




token = requests.post('http://127.0.0.1:8000/token/', data={
    'username': 'admin',
    'password': 'admin'
})

headers = {
  'Authorization': token.json()['access']
}
profile = requests.get('http://127.0.0.1:8000/cabinet/', headers=headers)

payload = {
    'text': 'Suck cock dick pick ',
    'hour ': 4.0,
    'project': 'huinder',
    'curator': 'Debil'
}
report = requests.request("POST", 'http://127.0.0.1:8000/cabinet/reports/', headers=headers, data=payload)


print(token.json())
print(profile.json())
print(report.status_code)
