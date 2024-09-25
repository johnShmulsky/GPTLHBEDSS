import azure.functions as func
import json
import logging
import base64


def main(req: func.HttpRequest) -> func.HttpResponse:
    headersAsDict = dict(req.headers)
    clientPrincipal64=headersAsDict.get('x-ms-client-principal','')
    base64_bytes = clientPrincipal64.encode("ascii")
    sample_string_bytes = base64.b64decode(base64_bytes)
    sample_string = sample_string_bytes.decode("ascii")
    return func.HttpResponse(sample_string)
