import requests
import simplejson
from datetime import datetime


def authenticate(headers):
    request = requests.post('http://127.0.0.1:8000/token/', data={
        'username': 'admin',
        'password': 'admin',
        'IP': '102.42.23.56'
    })
    headers['Authorization'] = request.json()['access']


def get_cabinet_info(headers):
    request = requests.get('http://127.0.0.1:8000/cabinet/', headers=headers)
    try:
        assert request.status_code == 200
    except AssertionError:
        print("Error at http://127.0.0.1:8000/cabinet/")


def is_user_admin(headers):
    request = requests.get('http://127.0.0.1:8000/check_admin/', headers=headers)
    try:
        assert request.status_code == 200
    except AssertionError:
        print("Error at http://127.0.0.1:8000/check_admin/")


def cabinet_reports(headers):
    t = datetime.now()
    request = requests.get(f'http://127.0.0.1:8000/cabinet/reports/?month={t.month}&&year={t.year}', headers=headers)
    try:
        assert request.status_code == 200
    except AssertionError:
        print("Error at http://127.0.0.1:8000/cabinet/reports/")


headers = {}
authenticate(headers)
get_cabinet_info(headers)
is_user_admin(headers)
cabinet_reports(headers)
