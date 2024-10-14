from AppUtils import BlobUtils
import azure.functions as func
import json
import logging


async def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        return_json = []
        container = req.params.get('container')
        blobNames = await BlobUtils.listBlobs(container)
        for blobName in blobNames:
            return_json.append({'container':container ,'blob':blobName})
        return func.HttpResponse(json.dumps(return_json,indent=4))
    except Exception as e:
        return func.HttpResponse(e.message)
