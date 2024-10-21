import os
from typing import List, MutableMapping
from AppUtils import AuthUtils
from azure.monitor.ingestion.aio import LogsIngestionClient


async def sendLogs(req, objectID, message):
    endpoint = os.environ["DATA_COLLECTION_ENDPOINT"]
    rule_id = os.environ["LOGS_DCR_RULE_ID"]
    body: List[MutableMapping[str, str]] = [
        {"EventType": "AccessTableau", "UserID":AuthUtils.getPrincipal(req)['userDetails'], "ObjectID":objectID, "Message":message}
    ]
    credential = AuthUtils.getCredential()
    client = LogsIngestionClient(endpoint=endpoint, credential=credential, logging_enable=True)
    async with client:
        await client.upload(rule_id=rule_id, stream_name=os.environ["LOGS_DCR_STREAM_NAME"], logs=body)
