from AppUtils import BlobUtils,LogUtils,SecurityUtils,AuthUtils
import azure.functions as func
import json
import logging


async def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        return_json = []
        container = req.params.get('container')
        principal = AuthUtils.getPrincipal(req)
        SecurityUtils.canAccessDirectory(container, principal['userRoles'])
        blobNames = await BlobUtils.listBlobs(container)
        for blobName in blobNames:
            return_json.append({'container':container ,'blob':blobName})
        await LogUtils.sendLogs(principal['userDetails'],'ListBlobs',container,'User accessed directory {0}'.format(container))
        return func.HttpResponse(json.dumps(return_json,indent=4))
    except Exception as e:
        return func.HttpResponse(e.message)
