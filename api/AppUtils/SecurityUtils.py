container_security = {
    'test':'testrole',
    'lbst':'lowerbrule',
    'rst':'rosebud'
    }



def canAccessCase(caseJson, roles):
    #todo use tribal land? tribal affilliation? 
    return False

def canAccessDirectory(container, roles):
    roleCheck = container_security.get(container,'miss')
    return roleCheck in roles

