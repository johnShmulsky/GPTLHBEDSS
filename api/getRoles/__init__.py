import json
import aiohttp
import azure.functions as func
import LogUtils

default_roles= {
  'rosebud':'48fb1a49-2fa7-4104-8f40-a0d311c45c6d',
  'oglala':'9de5a9b9-e09e-4264-adb9-4769c29dc667',
  'lowerbrule':'cf31ae3e-9804-4e75-ad03-28431e35b18a',
  'turtle':'1ab7e6aa-69d4-4d2d-a4be-a357d31e2e72'
}

endpoint = 'https://graph.microsoft.com/v1.0/me/memberOf'

async def isUserInGroup(groupId, bearerToken):
  headers = {
    'Authorization': 'Bearer {0}'.format(bearerToken) 
  }
  params = {
    '$filter':"id eq '{0}'".format(groupId)
  }
  async with aiohttp.ClientSession() as client:
    async with client.get( endpoint,headers=headers, params=params) as response:
      if response.status != 200:
        return False
      userData = await response.json()  
      for value in userData.get('value',[]):
        if value.get('id','') == groupId:
          return True
      return False
  return False  
  

async def getRoles(token):
  roles = ['authenticated','testrole']
  for role, groupId in default_roles.items():
    result = await isUserInGroup(groupId, token)
    if result:
      roles.append(role)
  return {"roles":roles}


async def main(req: func.HttpRequest) -> func.HttpResponse:
  claims = req.get_json()
  accessToken = claims['accessToken']
  roles = await getRoles(accessToken)
  await LogUtils.sendLogs(req, '', '','logged with roles:{0}'.format(json.dumps(roles)))
  return func.HttpResponse(json.dumps(roles,indent=4))
