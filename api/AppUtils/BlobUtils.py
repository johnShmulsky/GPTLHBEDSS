from azure.storage.blob.aio import BlobServiceClient, ContainerClient
import os
from AppUtils import AuthUtils

account_url = "https://sagpthdedsstest.blob.core.windows.net"

async def listBlobs(container):
    credential = AuthUtils.getCredential()
    async with BlobServiceClient(account_url=account_url, credential=credential) as blob_service_client:
        async with blob_service_client.get_container_client(container) as container_client:
            blobs_list = []
            async for blob in container_client.list_blobs():
                blobs_list.append(blob.name)
            return blobs_list

async def getBlob(container, blobName):
    credential = AuthUtils.getCredential()
    async with BlobServiceClient(account_url=account_url, credential=credential) as blob_service_client:
        async with blob_service_client.get_blob_client(container=container, blob=blobName) as blob_client:
            stream = await blob_client.download_blob()
            return await stream.readall()
