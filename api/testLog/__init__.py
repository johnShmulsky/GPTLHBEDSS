
import azure.functions as func

from AppUtils import LogUtils


async def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        await LogUtils.logEvent(req,'logTest','','testing function')
    except Exception as ex:
        return func.HttpResponse(ex.message)  
    return func.HttpResponse("success")
