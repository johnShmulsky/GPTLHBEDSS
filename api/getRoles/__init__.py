import json
import copy
import azure.functions as func

default_roles= [
  '12345678':'oglala',
  
]


def getAccessToken(req):
  try:
    claims = req.get_json()
    accessToken = claims['accessToken']
    return "pass"
  except Exception as ex:
    return "fail"


def getRoles(req):
  roles = ['testrole', 'authenticated', 'anonymous']
  roles.append(getAccessToken(req))
  return {"roles":roles}


def main(req):
  return func.HttpResponse(json.dumps(getRoles(req),indent=4))
