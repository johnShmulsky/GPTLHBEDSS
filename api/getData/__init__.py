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
    'authGroup':'authenticated'
  },
  {
    'id': 2,
    'title': "Great Plains Area Demographics Dashboard",
    'subTitle': "Demographic information",
    'desc': "Great Plains Area Demographics Dashboard from 2010",
    'img': 'Img4',
    'type': 'tableau',
    'authGroup':'anonymous'
  },
  {
    'id': 3,
    'title': "Static Report Content",
    'subTitle': "Pictures, Brochures, or PDF presentations of compiled data and reports",
    'desc': "Non-interactive published material can be disseminated as well",
    'img': 'Img3',
    'cardImg': 'staticImg',
    'authGroup':'anonymous'
  },
  {
    'id': 4,
    'title': "Tableau Dashboard",
    'subTitle': "Example Table 1",
    'desc': "Server hosted dashboards and reports with security provided via the identity provider",
    'img': 'Img4',
    'cardImg': 'tableau',
    'authGroup':'authenticated'
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

