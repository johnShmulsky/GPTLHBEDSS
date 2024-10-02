import json
import copy
import azure.functions as func

def getRoles(req):
  roles = ['testrole', 'authenticated', 'anonymous']
  return {"roles":roles}


def main(req):
  return func.HttpResponse(json.dumps(getRoles(req)),indent=4))
