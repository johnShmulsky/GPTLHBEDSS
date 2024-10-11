from AppUtils import BlobUtils
import azure.functions as func
import json
import logging


async def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        container = req.params.get('container')
        blobName = req.params.get('blob')
        blobData = await BlobUtils.getBlob(container,blobName)
        return func.HttpResponse(blobData)
    except Exception as e:
        return func.HttpResponse(e.message)
