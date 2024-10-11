from AppUtils import BlobUtils
import azure.functions as func
import json
import logging


def main():
    try:
        container = req.params.get('container')
        blobName = req.params.get('blob')
        blobData = await BlobUtils.getBlob(container,blobName)
        return func.HttpResponse(blobData)
    except Exception as e:
        return func.HttpResponse(e.message)
