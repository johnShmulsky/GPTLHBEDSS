from AppUtils import BlobUtils,LogUtils
import azure.functions as func
import json
import logging


async def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        container = req.params.get('container')
        blobName = req.params.get('blob')
        blobData = await BlobUtils.getBlob(container,blobName)
        await LogUtils.logEvent(req,'getBlob',blobName,'User accessed directory {0} - blob {1}'.format(container,blobName))
        return func.HttpResponse(blobData)
    except Exception as e:
        return func.HttpResponse(e.message)
