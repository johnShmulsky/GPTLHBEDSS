import logging
import azure.functions as func
import json

default_json = {
    "identityProvider": "test-environment",
    "userId": "12345uid",
    "userDetails": "My.Account@test.com",
    "userRoles": [
        "anonymous"
    ],
    "displayName": "My Test Account"
}


def main(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(json.dumps(default_json,indent=4))
