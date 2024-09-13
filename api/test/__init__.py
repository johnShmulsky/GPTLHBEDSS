import logging
import azure.functions as func
import json

default_json = {
    "FIRST_NAME":"John",
    "LAST_NAME":"DOE",
    "HOMEPHONE":"605-555-5555",
    "CITY":"Rapid City",
    "STREET":"100 First Avenue",
    "COUNTY":"Pennington County",
    "TREATMENTS":
    [
        {
            "TREATMENT_DATE":"01/01/2024",
            "MEDICATION":"Ethambutol"
        },
        {
            "TREATMENT_DATE":"01/08/2024",
            "MEDICATION":"Rifampin"
        }
 
    ],
    "id":"12345678",
    "_ts":"1725652012"
    }


def main(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse(json.dumps(default_json,indent=4))
