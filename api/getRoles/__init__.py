import json
import aiohttp
import azure.functions as func

default_roles= {
  'rosebud':'48fb1a49-2fa7-4104-8f40-a0d311c45c6d',
  'oglala':'9de5a9b9-e09e-4264-adb9-4769c29dc667'
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
  roles = ['authenticated', 'anonymous']
  for role, groupId in default_roles.items():
    result = await isUserInGroup(groupId, token)
    if result:
      roles.append(role)
  return {"roles":roles}


async def main(req: func.HttpRequest) -> func.HttpResponse:
  claims = req.get_json()
  accessToken = claims['accessToken']
  roles = await getRoles(accessToken)
  return func.HttpResponse(json.dumps(roles,indent=4))
