import base64
import json


def getPrincipal(req):
    headersAsDict = dict(req.headers)
    clientPrincipal64=headersAsDict.get('x-ms-client-principal','')
    base64_bytes = clientPrincipal64.encode("ascii")
    principal_string_bytes = base64.b64decode(base64_bytes)
    principal_string = principal_string_bytes.decode("ascii")
    principal = json.loads(principal_string)  

def getUserRoles(req):
    try:
        return getPrincipal(req)['userRoles']
  except:
        return ['anonymous']
