import json
import aiohttp
import azure.functions as func

default_roles= {
  'access':'97103693-cad6-4409-b44b-fbe4e342e601',
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
  roles = ['testrole', 'authenticated', 'anonymous']
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
