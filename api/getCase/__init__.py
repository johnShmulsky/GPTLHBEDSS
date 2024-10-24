import json
import copy
import azure.functions as func

noEntry = {
    "MESSAGE":"No message configured for this property",
    "TYPE":None
    }


default_model = {
    "FIRST_NAME": {
        "MESSAGE": "First Name",
        "TYPE": "String",
    },
    "LAST_NAME": {
        "MESSAGE": "Last Name",
        "TYPE": "String",
    },
    "HOMEPHONE": {
        "MESSAGE": "Home Phone Number",
        "TYPE": "Phone",
    },
    "CITY": {
        "MESSAGE": "City",
        "TYPE": "String",
    },
    "STREET": {
        "MESSAGE": "Street",
        "TYPE": "String",
    },
    "COUNTY": {
        "MESSAGE": "County of residence at time of morbidity",
        "TYPE": "String",
    },
    "POSTAL_CODE": {
        "MESSAGE": "Postal Code",
        "TYPE": "String",
    },
    "ON_TRIBAL_LAND": {
        "MESSAGE": "Living on Tribal Lands",
        "TYPE": "String",
    },
    "TRIBAL_LAND_SPECIFY": {
        "MESSAGE": "Tribal Desingation",
        "TYPE": "String",
    },
    "TREATMENTS_HEADER":{
        "MESSAGE":"Treatment Section",
        "TYPE":"SectionHeader"
    },
    "TREATMENTS": [
        {
            "TREATMENT_DATE": {
                "MESSAGE": "Date of Treatment",
                "TYPE": "Date",
            },
            "MEDICATION": {
                "MESSAGE": "Medication Administered",
                "TYPE": "Dropdown",
                "ENUM":[{"TEXT":"Rifampin","CODE":"68180-659"},{"TEXT":"Ethambutol","CODE":"53808-0977-1"}]
            }
        }
    ],
    "INVESTIGATIONS_HEADER":{
        "MESSAGE":"Labs Section",
        "TYPE":"SectionHeader"
    },
    "LABS": [
        {
            "SPECIMEN_DATE": {
                "MESSAGE": "Specimen Date",
                "TYPE": "Date",
            },
            "SPECIMEN_SOURCE": {
                "MESSAGE": "Specimen Source",
                "TYPE": "String"
            },
            "TEST": {
                "MESSAGE": "Test",
                "TYPE": "String"
            },
            "RESULT": {
                "MESSAGE": "Result",
                "TYPE": "String"
            }
        }
    ],
    "Type": {
        "MESSAGE": "Disease Type",
        "TYPE": "String",
        "VALUE": "Active Tuberculosis"
    },
    "id": {
        "MESSAGE": "Case ID",
        "TYPE": "String",
        "VALUE": "21345678"
    },
    "_ts": {
        "MESSAGE": "Last Update",
        "TYPE": "EpochTime",
        "VALUE": "1725652012"
    }    
}


default_json = {
    "FIRST_NAME":"John",
    "LAST_NAME":"Doe",
    "HOMEPHONE":"605-555-5555",
    "CITY":"Rapid City",
    "STREET":"100 First Avenue",
    "COUNTY":"Pennington County",
    "POSTAL_CODE":"57703",
    "ON_TRIBAL_LAND":"No",
    "TRIBAL_LAND_SPECIFY":"Oglala Lakota",
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
    "LABS":
    [
        {
            "SPECIMEN_DATE":"04/10/2024",
            "SPECIMEN_SOURCE":"SPUTUM",
            "TEST":"SMEAR",
            "RESULT":"4+"
        },
        {
            "SPECIMEN_DATE":"04/15/2024",
            "SPECIMEN_SOURCE":"SPUTUM",
            "TEST":"TB Organism",
            "RESULT":"Detected"
        }

    ],
    "Type":"Active Tuberculosis",
    "id":"12345678",
    "_ts":"1725652012"
    }


def modelProcess(model,input_json):
    return_json = {}
    for q_id,q_def in model.items():
        return_json[q_id]=model_handler.get(type(q_def))(q_id,q_def,input_json)    
    return copy.deepcopy(return_json)


def cacheRetreive(q_id,q_def,input_json):
    return_json = copy.deepcopy(q_def)
    return_json["VALUE"]=input_json.get(q_id)
    return return_json


def listRetreive(q_id,q_def,input_json):
    repeatable_json = []
    subModel = q_def[0]
    for valueSet in input_json.get(q_id,[{}]):
        repeatable_json.append(modelProcess(subModel,valueSet))
    return repeatable_json


model_handler = {
    dict:cacheRetreive,
    list:listRetreive
    }

def main(req):
  return func.HttpResponse(json.dumps(modelProcess(default_model,default_json),indent=4))

