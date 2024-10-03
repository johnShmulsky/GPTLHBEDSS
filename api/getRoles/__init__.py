import json
import copy
import azure.functions as func

def getAccessToken(req):
  try:
    claims = reg.get_json()
    accessToken = claims['access_token']
    return "pass"
  except:
    return "fail"


def getRoles(req):
  roles = ['testrole', 'authenticated', 'anonymous']
  roles.append(getAccessToken(req))
  return {"roles":roles}


def main(req):
  return func.HttpResponse(json.dumps(getRoles(req),indent=4))
