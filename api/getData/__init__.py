import json
import logging
import azure.functions as func
import base64
import copy

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
    'title': "Line List",
    'subTitle': "Sample Line Data",
    'desc': "Line List data sets produced via Fabric can be displayed, explored, and exported by credentialed users",
    'img': 'Img2',
    'cardImg': 'linelist',
    'authGroup':'anonymous'
  },
  {
    'id': 3,
    'title': "Static Report Content",
    'subTitle': "Pictures, Brochures, or PDF presentations of compiled data and reports",
    'desc': "Non-interactive published material can be disseminated as well",
    'img': 'Img3',
    'cardImg': 'static',
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
    headersAsDict = {'x-ms-client-principal':'test'}
    clientPrincipal64=headersAsDict.get('x-ms-client-principal','')
    base64_bytes = clientPrincipal64.encode("ascii")
    principal_string_bytes = base64.b64decode(base64_bytes)
    principal_string = principal_string_bytes.decode("ascii")
    principal = json.loads(principal_string)
    return func.HttpResponse(json.dumps(process(default_json, principal.get('userRoles',[])),indent=4))
