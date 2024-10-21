import os
from typing import List, MutableMapping
from AppUtils import AuthUtils
from azure.monitor.ingestion.aio import LogsIngestionClient


async def send_logs():
    endpoint = os.environ["DATA_COLLECTION_ENDPOINT"]
    rule_id = os.environ["LOGS_DCR_RULE_ID"]
    body: List[MutableMapping[str, str]] = [
        {"TimeGenerated": "2024-10-17 23:51:14", "EventType": "AccessTableau", "UserID": "12345678sdfsdfed-sb", "ObjectID":"GreatPlainsDemographic", "Message":"Tableau Report displayed to user"}
    ]
    credential = AuthUtils.getCredential()
    client = LogsIngestionClient(endpoint=endpoint, credential=credential, logging_enable=True)
    async with client:
        await client.upload(rule_id=rule_id, stream_name=os.environ["LOGS_DCR_STREAM_NAME"], logs=body)
    await credential.close()

async def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        sendLogs()
    except Exception as ex:
       return func.HttpResponse(ex.message)  
    return func.HttpResponse("success")
