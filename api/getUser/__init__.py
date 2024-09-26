import azure.functions as func
import json
import logging
import base64
import os
import requests
import msal
import aiohttp
import asyncio

# config
scopes = ["https://graph.microsoft.com/.default"]
endpoint=  "https://graph.microsoft.com/v1.0/users/{0}"
authority = 'https://login.microsoftonline.com/704bef3c-134c-430e-860d-b9b9baa16039'
oidc_authority = None

# Values from app registration
client_id = os.environ['AZURE_CLIENT_ID']
client_secret = os.environ['AZURE_CLIENT_SECRET_APP_SETTING_NAME']


app = msal.ConfidentialClientApplication(
    client_id,
    authority=authority,
    oidc_authority=oidc_authority,
    client_credential=client_secret,
    )


def getAppToken(principalName):
    result = app.acquire_token_silent(scopes, account=None)
    if not result:
        result = app.acquire_token_for_client(scopes=scopes)
    if "access_token" in result:
        return result
    else:
        return None

async def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        headersAsDict = dict(req.headers)
        clientPrincipal64=headersAsDict.get('x-ms-client-principal','')
        base64_bytes = clientPrincipal64.encode("ascii")
        principal_string_bytes = base64.b64decode(base64_bytes)
        principal_string = principal_string_bytes.decode("ascii")
        principal = json.loads(principal_string)
        result = getAppToken(principal['userDetails'])
        userData = {"displayName":"test user"}
    
        return func.HttpResponse(json.dumps(userData,indent=4))
    except Exception as ex:
       return func.HttpResponse(ex.message)     

