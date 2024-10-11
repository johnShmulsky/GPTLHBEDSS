from azure.identity import ClientSecretCredential
from azure.storage.blob.aio import BlobServiceClient, ContainerClient
import os

account_url = "https://sagpthdedsstest.blob.core.windows.net"
tenant_id = "704bef3c-134c-430e-860d-b9b9baa16039"
client_id = os.environ['AZURE_CLIENT_ID']
client_secret = os.environ['AZURE_CLIENT_SECRET_APP_SETTING_NAME']
credential = ClientSecretCredential(tenant_id, client_id, client_secret)



async def listBlobs(container):
    async with BlobServiceClient(account_url=account_url, credential=credential) as blob_Service_client:
        async with blob_service_client.get_container_client(container) as container_client:
            blobs_list = []
            async for blob in container_client.list_blobs():
                blobs_list.append(blob.name)
            return blobs_list
