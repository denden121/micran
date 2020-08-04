import requests
import simplejson


headers = {
    'IP': '102.42.23.56'
}

token = requests.post('http://127.0.0.1:8000/token/', data={
    'username': 'admin',
    'password': 'admin'
})
print(token)

headers['Authorization'] = token.json()['access'],

profile = requests.get('http://127.0.0.1:8000/cabinet/', headers=headers)

report = requests.request("POST", 'http://127.0.0.1:8000/cabinet/reports/', headers=headers, data=payload)

print(token.json())
print(profile.json())
print(report.status_code)
