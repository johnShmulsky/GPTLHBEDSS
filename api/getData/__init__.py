import json
import logging
import azure.functions as func
import base64
import copy
from AppUtils import AuthUtils as utils

default_json = [
  {
    'id': 1,
    'title': "Power BI Dashboard",
    'subTitle': "Sample Dashboard with disease rates",
    'desc': "Power BI Dashboards, powered and goverend by fabric, can be dynamically shown here",
    'img': 'Img1',
    'cardImg': 'pbi',
    'type': 'image',
    'authGroup':'authenticated'
  },
  {
    'id': 2,
    'title': "My Directory",
    'subTitle': "test directory data",
    'desc': "Files of all types added to a container",
    'img': 'Img2',
    'cardImg': 'linelist',
    'type': 'directory',
    'container':'test',
    'authGroup':'authenticated'
  },
  {
    'id': 3,
    'title': "Static Report Content",
    'subTitle': "Pictures, Brochures, or PDF presentations of compiled data and reports",
    'desc': "Non-interactive published material can be disseminated as well",
    'img': 'Img3',
    'type': 'image',
    'cardImg': 'staticImg',
    'authGroup':'anonymous'
  },
  {
    'id': 4,
    'title': "Great Plains Area Demographcs",
    'subTitle': "Example Table 1",
    'desc': "Server hosted dashboards and reports with security provided via the identity provider",
    'type': 'tableau',
    'embedd':'https://public.tableau.com/views/MainDashboard_15789299527310/GreatPlains2',
    'cardImg': 'tableau',
    'authGroup':'anonymous'
  },
]

def process(input_json, userRoles):
    return_json = []
    for data in input_json:
        if data.get('authGroup','') in userRoles:
            return_json.append(copy.deepcopy(data))
    return return_json
    

def main(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(json.dumps(process(default_json, utils.getUserRoles(req)),indent=4))

