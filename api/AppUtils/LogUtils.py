import os
from typing import List, MutableMapping
from AppUtils import AuthUtils
from azure.monitor.ingestion.aio import LogsIngestionClient


async def sendLogs(userDetails,eventType,objectID, message):
    endpoint = os.environ["DATA_COLLECTION_ENDPOINT"]
    rule_id = os.environ["LOGS_DCR_RULE_ID"]
    body: List[MutableMapping[str, str]] = [
        {"EventType": eventType, "UserID":userDetails, "ObjectID":objectID, "Message":message}
    ]
    credential = AuthUtils.getCredential()
    client = LogsIngestionClient(endpoint=endpoint, credential=credential, logging_enable=True)
    async with client:
        await client.upload(rule_id=rule_id, stream_name=os.environ["LOGS_DCR_STREAM_NAME"], logs=body)

async def logEvent(req,eventType,objectID, message):
    await sendLogs(AuthUtils.getPrincipal(req)['userDetails'],eventType,objectID, message)
