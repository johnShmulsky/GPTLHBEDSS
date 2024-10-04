import azure.functions as func
import json
import logging
import os
import msal
import aiohttp
from AppUtils import AuthUtils as utils

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
    principal = utils.getPrincipal(req)
    result = getAppToken(principal['userDetails'])
    userData = {}
    try:
        async with aiohttp.ClientSession() as client:
            headers={'Authorization': 'Bearer ' + result['access_token']}
            async with client.get( endpoint.format(principal['userDetails']),headers=headers) as response:
                userData = await response.json()    
    except Exception as ex:
       return func.HttpResponse(ex.message)     
        
    principal['displayName']=userData['displayName']
    return func.HttpResponse(json.dumps(principal,indent=4))
