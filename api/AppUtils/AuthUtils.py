import base64
import json
import os
from azure.identity.aio import ClientSecretCredential

client_id = os.environ['AZURE_CLIENT_ID']
client_secret = os.environ['AZURE_CLIENT_SECRET_APP_SETTING_NAME']
credential = ClientSecretCredential(tenant_id, client_id, client_secret)

def getCredential():
    return credential


def getPrincipal(req):
    headersAsDict = dict(req.headers)
    clientPrincipal64=headersAsDict.get('x-ms-client-principal','')
    base64_bytes = clientPrincipal64.encode("ascii")
    principal_string_bytes = base64.b64decode(base64_bytes)
    principal_string = principal_string_bytes.decode("ascii")
    principal = json.loads(principal_string)
    return principal

def getUserRoles(req):
    try:
        return getPrincipal(req)['userRoles']
    except:
        return ['anonymous']
