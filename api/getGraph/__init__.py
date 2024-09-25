import azure.functions as func
import json
import logging
import base64
import os
import requests
import msal

# config
scopes = ["https://graph.microsoft.com/.default"]
endpoint=  "https://graph.microsoft.com/v1.0/users"
authority = 'https://login.microsoftonline.com/704bef3c-134c-430e-860d-b9b9baa16039'
oidc_authority = 'https://login.microsoftonline.com/704bef3c-134c-430e-860d-b9b9baa16039/v2.0'

# Values from app registration
client_id = os.environ['AZURE_CLIENT_ID']
client_secret = os.environ['AZURE_CLIENT_SECRET_APP_SETTING_NAME']


app = msal.ConfidentialClientApplication(
    client_id,
    authority=authority, 
    client_credential=client_secret,
    )

access_token = None

def getGraphData():
    result = app.acquire_token_silent(config["scope"], account=None)
    if not result:
        result = app.acquire_token_for_client(scopes=config["scope"])
    if "access_token" in result:
        # Calling graph using the access token
        graph_data = requests.get(  # Use token to call downstream service
            endpoint,
            headers={'Authorization': 'Bearer ' + result['access_token']}, ).json()
    else:
        graph_data = {"OOPS":"NO TOKEN"}
    return graph_data

def main(req: func.HttpRequest) -> func.HttpResponse:
    #TODO Check reddis cache for existing user information
    
    return func.HttpResponse(json.dumps(getGraphData(),indent=4))
